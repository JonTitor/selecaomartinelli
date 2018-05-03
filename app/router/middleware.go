package router

import (
	"fmt"
	"mime"
	"net/http"
	"net/url"
	"path/filepath"
	"strings"
	"time"

	"martinelli/seletivomartinelli/app/build"
	"martinelli/seletivomartinelli/app/config"
	"martinelli/seletivomartinelli/app/fileb0x/assets"
	"martinelli/seletivomartinelli/app/modulos/util"

	"github.com/gin-gonic/gin"
)

func mainMiddleware() gin.HandlerFunc {
	var (
		gaHabilitado      = (config.Config.Gin.Mode == gin.ReleaseMode)
		atualizarPaginaEm = config.Config.Sistema.MinutosSessao * 60
	)
	return func(c *gin.Context) {
		c.Set("Build", build.Build)
		c.Set("MD5", assets.MD5)

		// tempo em segundos para atualização da página quando encerrar a sessão
		if config.Config.Sistema.MinutosSessao > 0 {
			c.Set("AtualizarPaginaEm", atualizarPaginaEm)
		}

		// Google Analytics
		c.Set("GAHabilitado", gaHabilitado)
		sess := getSession(c)
		c.Set("Flashes", sess.Flashes())
		sess.Set("UltimoAcesso", time.Now().Unix())
		sess.Save()
		if config.Config.HTTP.CacheHeader && strings.HasPrefix(c.Request.URL.Path, "/assets/") {
			// fazendo cache de CSS e JavaScript se habilitado
			c.Header("Cache-Control", "public, max-age=31536000")
		} else {
			// isso desativa o cache
			// evita que o Chrome mostre uma página em cache ao clicar em "Voltar",
			// depois de fazer logoff, por exemplo
			c.Header("Cache-Control", "no-cache, max-age=0, must-revalidate, no-store")
		}

		c.Header("Content-Security-Policy", "default-src 'self' 'unsafe-eval' 'unsafe-inline' data: https://www.google-analytics.com")
	}
}

func serveFile(file string, cache bool) gin.HandlerFunc {
	var (
		mimeType          = mime.TypeByExtension(filepath.Ext(file))
		bytes, errArquivo = assets.ReadFile(file)
	)
	return func(c *gin.Context) {
		if errArquivo != nil {
			c.String(http.StatusNotFound, "NotFound")
			return
		}

		if cache {
			c.Header("Cache-Control", "public, max-age=31536000")
		} else {
			c.Header("Cache-Control", "no-cache, max-age=0, must-revalidate, no-store")
		}

		c.Data(http.StatusOK, mimeType, bytes)
	}
}
func deveEstarLogado(c *gin.Context) {
	if _, exists := c.Get("Usuario"); !exists {
		urlStr := fmt.Sprintf("/session/new?url=%s", url.QueryEscape(util.Base64Encode(c.Request.URL.RequestURI())))
		c.Redirect(http.StatusSeeOther, urlStr)
		c.Abort()
	}
}
