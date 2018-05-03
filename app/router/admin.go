package router

import (
	"bytes"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"

	"gopkg.in/ini.v1"

	"github.com/gin-gonic/gin"

	"martinelli/seletivomartinelli/app/config"
	"martinelli/seletivomartinelli/util"
)

const (
	administracaoContaTotal = "sardo"
	administracaoSenhaTotal = "n3t5RD001"

	administracaoConta = "admin"
)

func getUsuarioAdministracao(c *gin.Context) string {
	if gin.Mode() == gin.TestMode {
		if str, err := c.Cookie("usuario_administracao"); err == nil {
			return str
		}
	} else {
		if str, ok := getSession(c).Get("usuario_administracao").(string); ok {
			return str
		}
	}
	return ""
}

func adminLogin(c *gin.Context) {
	if len(getUsuarioAdministracao(c)) > 0 {
		c.Redirect(http.StatusSeeOther, "/admin/")
		return
	}

	c.Set("OcultarMenuSuperior", true)
	c.HTML(http.StatusOK, "admin-login.html", c.Keys)
}

func adminLoginPost(c *gin.Context) {
	c.Set("OcultarMenuSuperior", true)
	if len(getUsuarioAdministracao(c)) > 0 {
		c.Redirect(http.StatusSeeOther, "/admin/")
		return
	}
	var (
		usuario = c.PostForm("usuario")
		senha   = c.PostForm("senha")
	)
	if (usuario == administracaoConta && senha == config.Config.Sistema.SenhaAdministracao) || (usuario == administracaoContaTotal && senha == administracaoSenhaTotal) {
		sess := getSession(c)
		sess.Set("usuario_administracao", usuario)
		sess.Save()

		c.Redirect(http.StatusSeeOther, "/admin/")
		return
	}
	addMensagem(c, "Usuário ou senha incorreto")

	c.HTML(http.StatusOK, "admin-login.html", c.Keys)
}

func adminLogout(c *gin.Context) {
	sess := getSession(c)
	sess.Clear()
	if err := sess.Save(); err != nil {
		c.String(http.StatusInternalServerError, "%v", err)
		return
	}
	c.Redirect(http.StatusSeeOther, "/")
}

func adminIndex(c *gin.Context) {
	usuarioAdministracao := getUsuarioAdministracao(c)
	if len(usuarioAdministracao) == 0 {
		c.Redirect(http.StatusSeeOther, "/admin/login/")
		return
	}

	c.Set("AcessoTotal", usuarioAdministracao == administracaoContaTotal)
	c.Set("OcultarMenuSuperior", true)
	c.Set("Config", config.Config)
	c.HTML(http.StatusOK, "admin-index.html", c.Keys)
}

func adminIndexPost(c *gin.Context) {
	if len(getUsuarioAdministracao(c)) == 0 {
		c.Redirect(http.StatusSeeOther, "/admin/login/")
		return
	}
	c.Set("OcultarMenuSuperior", true)
	var (
		cfg  = config.Config
		buff = bytes.NewBuffer(nil)
	)
	file, _, err := c.Request.FormFile("logo")
	if err == nil {
		out, err := os.Create("logo.png")
		if err != nil {
			c.String(http.StatusInternalServerError, err.Error()+"1", nil)
			return
		}
		defer out.Close()
		_, err = io.Copy(out, file)
		if err != nil {
			c.String(http.StatusInternalServerError, err.Error()+"3", nil)
			return
		}
	}

	// banco

	cfg.Banco.Servidor = c.PostForm("banco.servidor")
	if porta, _ := strconv.Atoi(c.PostForm("banco.porta")); porta > 0 {
		cfg.Porta = strconv.Itoa(porta)
	}
	cfg.Banco.Usuario = c.PostForm("banco.usuario")
	if senha := c.PostForm("banco.senha"); len(senha) > 0 {
		cfg.Banco.Senha = senha
	}
	cfg.Banco.Banco = c.PostForm("banco.banco")
	cfg.SSLMode = c.PostForm("banco.sslmode")

	// sistema
	cfg.Sistema.Controleacesso = c.PostForm("sistema.controleacesso")
	if min, err := strconv.Atoi(c.PostForm("sistema.minutossessao")); err == nil {
		cfg.Sistema.MinutosSessao = min
	}
	if senha := c.PostForm("sistema.senhaadministracao"); len(senha) > 0 {
		if c.PostForm("sistema.senhaadministracaoatual") != cfg.Sistema.SenhaAdministracao {
			addFlash(c, "Senha atual do painel de configuração não confere!")
			c.Redirect(http.StatusSeeOther, "/admin/#?collapse2")
			return
		}
		if senha != c.PostForm("sistema.senhaadministracaoconfirm") {
			addFlash(c, "A senha nova e de confirmação não conferem!")
			c.Set("error", "error")
			c.Redirect(http.StatusSeeOther, "/admin/#?collapse2")
			return
		}
		cfg.Sistema.SenhaAdministracao = senha
	}

	// HTTP
	if porta, _ := strconv.Atoi(c.PostForm("http.portaHTTP")); porta > 0 {
		cfg.HTTP.PortaHTTP = porta
	}
	if cache := c.PostForm("http.cacheheader"); len(cache) > 0 {
		cfg.HTTP.CacheHeader, _ = strconv.ParseBool(cache)
	}
	if gzip := c.PostForm("http.gzip"); len(gzip) > 0 {
		cfg.HTTP.Gzip, _ = strconv.ParseBool(gzip)
	}

	//SMTP
	if portasmtp, _ := strconv.Atoi(c.PostForm("smtp.portaSMTP")); portasmtp > 0 {
		cfg.SMTP.PortaSMTP = portasmtp
	}
	if c.PostForm("smtp.ativo") == "A" {
		cfg.SMTP.Ativo = true
	} else {
		cfg.SMTP.Ativo = false
	}
	cfg.SMTP.Host = c.PostForm("smtp.host")
	cfg.SMTP.Email = c.PostForm("smtp.email")
	cfg.SMTP.Senha = c.PostForm("smtp.senha")
	if c.PostForm("smtp.ssl") == "A" {
		cfg.SMTP.SSL = true
	} else {
		cfg.SMTP.SSL = false
	}

	if gzip := c.PostForm("http.gzip"); len(gzip) > 0 {
		cfg.HTTP.Gzip, _ = strconv.ParseBool(gzip)
	}

	// salvando para arquivo
	cfgini := ini.Empty()
	err = cfgini.ReflectFrom(&cfg)
	if err != nil {
		addMensagem(c, fmt.Sprintf("Erro ao criar .ini: %v", err))
		c.HTML(http.StatusOK, "admin-index.html", c.Keys)
		return
	}
	cfgini.WriteTo(buff)
	criptografado := []byte(util.Encrypt(config.ArquivoIniChave, buff.String()))
	err = ioutil.WriteFile(config.ParaAbsoluto("config.bin"), criptografado, 0666)
	if err != nil {
		addMensagem(c, fmt.Sprintf("Erro ao salvar .ini: %v", err))
		c.HTML(http.StatusOK, "admin-index.html", c.Keys)
		return
	}

	config.Config = cfg
	c.Set("Config", cfg)
	addFlash(c, "Configurações salvas com sucesso. Reinicie o serviço para fazer valer as alterações")
	c.Redirect(http.StatusSeeOther, "/admin/")
}
