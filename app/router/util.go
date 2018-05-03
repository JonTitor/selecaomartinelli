package router

import (
	"database/sql"
	"fmt"
	"net/http"
	"os"
	"time"

	"sardo/helpdesk/app/config"
	"sardo/helpdesk/app/modelos"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

var (
	sessionOptions = sessions.Options{
		Path:     "/",
		HttpOnly: true,
	}
)

func getSession(c *gin.Context) (sessao sessions.Session) {
	sessao = sessions.Default(c)
	sessao.Options(sessionOptions)
	if config.Config.Sistema.MinutosSessao <= 0 {
		return
	}

	switch ultAceUnix := sessao.Get("UltimoAcesso").(type) {
	case int64:
		if time.Since(time.Unix(ultAceUnix, 0)).Minutes() > float64(config.Config.Sistema.MinutosSessao) {
			sessao.Clear()
			sessao.Save()
		}
	}
	return
}

func addMensagem(c *gin.Context, mensagemAdd string, arguments ...interface{}) {
	var mensagens []string
	if msgs, ok := c.Get("Mensagens"); ok {
		mensagens = msgs.([]string)
	}
	mensagens = append(mensagens, fmt.Sprintf(mensagemAdd, arguments...))
	c.Set("Mensagens", mensagens)
}

func addFlash(c *gin.Context, mensagem string, args ...interface{}) {
	s := getSession(c)
	s.AddFlash(fmt.Sprintf(mensagem, args...))
	s.Save()
}

func redirect(c *gin.Context, mensagem string, args ...interface{}) {
	c.Redirect(http.StatusSeeOther, fmt.Sprintf(mensagem, args...))
}

func getUsuario(c *gin.Context) *modelos.Usuario {
	return c.MustGet("Usuario").(*modelos.Usuario)
}

func handleError(c *gin.Context, err error) {
	switch err {
	case sql.ErrNoRows, gorm.ErrRecordNotFound:
		c.String(http.StatusNotFound, "Error 404: Not Found")
	default:
		c.String(http.StatusInternalServerError, "%v", err)
	}
}

func index(c *gin.Context) {
	var codusu interface{}

	s := sessions.Default(c)
	codusu = s.Get("codusu")
	if codusu != nil {
		usuario, err := modelos.GetUsuario(codusu.(string))
		if err != nil {
			fmt.Println(err)
		}
		alerta, err := modelos.GetClienteAlerta(usuario, true)
		if err != nil {
			fmt.Println(err)
		}
		if alerta.DesAle != "" {
			addMensagem(c, alerta.DesAle)

		}
	}

	_, err := os.Stat("logo.png")
	logoExiste := err == nil
	c.Set("logo", logoExiste)

	c.HTML(http.StatusOK, "index.html", c.Keys)
}
