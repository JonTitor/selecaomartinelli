package router

import (
	"net/http"
	"strconv"

	"martinelli/seletivomartinelli/app/config"
	"martinelli/seletivomartinelli/app/modelos"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
)

func SessionLogin(c *gin.Context) {
	var form struct {
		Usuario string `form:"usuario" binding:"required"`
		Senha   string `form:"senha" binding:"required"`
	}
	if err := c.Bind(&form); err != nil {
		handleError(c, err)
		return
	}

	usuarioIncorreto := func() {
		addFlash(c, "Usuário ou senha incorretos")
		c.Redirect(http.StatusSeeOther, "/")
	}

	usuario, err := modelos.GetUsuarioPeloLogin(config.DB, form.Usuario)
	if err == gorm.ErrRecordNotFound {
		usuarioIncorreto()
		return
	}
	if err != nil {
		handleError(c, err)
		return
	}

	if !usuario.SenhaValida(form.Senha) {
		usuarioIncorreto()
		return
	}

	sess := getSession(c)
	sess.Set("codusu", strconv.Itoa(usuario.CodUsu))
	if err = sess.Save(); err != nil {
		handleError(c, err)
		return
	}

	addFlash(c, "Login feito com sucesso")
	c.Redirect(http.StatusSeeOther, "/")
}

func SessionLogout(c *gin.Context) {
	s := getSession(c)
	s.Clear()
	if err := s.Save(); err != nil {
		handleError(c, err)
		return
	}
	c.Redirect(http.StatusSeeOther, "/")
}

// func SessionSenhaGet(c *gin.Context) {
// 	c.HTML(http.StatusOK, "session-troca-senha.html", c.Keys)
// }

// func SessionSenhaPost(c *gin.Context) {
// 	var form struct {
// 		SenhaAtual    string `form:"senha_atual" binding:"required"`
// 		SenhaNova     string `form:"senha_nova" binding:"required"`
// 		SenhaNovaConf string `form:"senha_nova_conf" binding:"required"`
// 	}
// 	if err := c.Bind(&form); err != nil {
// 		handleError(c, err)
// 		return
// 	}

// 	usuario := getUsuario(c)
// 	if !usuario.SenhaValida(form.SenhaAtual) {
// 		addFlash(c, "Senha atual incorreta")
// 		c.Redirect(http.StatusSeeOther, "/senha/")
// 		return
// 	}

// 	if len(form.SenhaNova) < 6 {
// 		addFlash(c, "Nova senha deve ter pelo menos 6 caracteres")
// 		c.Redirect(http.StatusSeeOther, "/senha/")
// 		return
// 	}

// 	if form.SenhaNova != form.SenhaNovaConf {
// 		addFlash(c, "Senha e conferência não batem")
// 		c.Redirect(http.StatusSeeOther, "/senha/")
// 		return
// 	}

// 	if err := usuario.SetSenha(form.SenhaNova); err != nil {
// 		handleError(c, err)
// 		return
// 	}
// 	if err := config.DB.Save(usuario).Error; err != nil {
// 		handleError(c, err)
// 		return
// 	}

// 	addFlash(c, "Senha trocada com sucesso")
// 	c.Redirect(http.StatusSeeOther, "/")
// }
