package router

import (
	"database/sql"
	"fmt"
	"net/http"
	"time"

	"sardo/helpdesk/app/config"
	"sardo/helpdesk/app/modelos"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func IndexUsuarios(c *gin.Context) {
	usuarios, err := modelos.GetUsuarios()
	if err != nil {
		handleError(c, err)
		return
	}
	c.Set("Usuarios", usuarios)

	c.HTML(http.StatusOK, "usuario-index.html", c.Keys)
}

func NovoUsuarios(c *gin.Context) {
	var (
		usuario = c.MustGet("Usuario").(*modelos.Usuario)
	)
	clientes, err := modelos.GetClientes(usuario)
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}
	c.Set("ehEdit", false)
	c.Set("clientes", clientes)
	c.HTML(http.StatusOK, "usuario-novo.html", c.Keys)
}

type UsuarioForm struct {
	DesEma string `form:"desema"`
	NomUsu string `form:"nomusu"`
	LogUsu string `form:"logusu"`
	SitUsu string `form:"situsu"`
	TipUsu string `form:"tipusu"`
	RecEma string `form:"recema"`
	VerAtv string `form:"veratv"`
	CodCli int    `form:"codcli"`
}

func SalvarUsuarios(c *gin.Context) {
	var (
		form UsuarioForm
		err  error
	)
	if err = c.Bind(&form); err != nil {
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}
	usuario := &modelos.Usuario{
		CodCli: form.CodCli,
		DesEma: form.DesEma,
		NomUsu: form.NomUsu,
		LogUsu: form.LogUsu,
		SitUsu: form.SitUsu,
		TipUsu: form.TipUsu,
		RecEma: form.RecEma,
		VerAtv: form.VerAtv,
		DatCad: time.Now(),
		DatAlt: time.Now(),
	}

	tx := config.DB.Begin()
	defer tx.Rollback()

	countUsuarioCadastrado, err := modelos.CountUsuario(c.PostForm("logusu"), c.PostForm("desemail"))
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}
	if countUsuarioCadastrado > 0 {
		addFlash(c, "Este usuario já está cadastrado!")
		c.Redirect(http.StatusSeeOther, "/usuarios/novo")
		return
	}

	if c.PostForm("hassen") == c.PostForm("hassenconfirm") {
		hash, erro := bcrypt.GenerateFromPassword([]byte(c.PostForm("hassen")), bcrypt.DefaultCost)
		if erro != nil {
			c.String(http.StatusInternalServerError, erro.Error(), nil)
			return
		}
		usuario.HasSen = sql.NullString{Valid: true, String: string(hash)}
	} else {
		addFlash(c, "Senhas não conferem!")
		c.Redirect(http.StatusSeeOther, "/usuarios/novo")
		return
	}

	if err := tx.Create(&usuario).Error; err != nil {
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}
	if err := tx.Commit().Error; err != nil {
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}

	c.Redirect(http.StatusSeeOther, "/usuarios")
}

func EditarUsuarios(c *gin.Context) {
	var (
		usuariologin = c.MustGet("Usuario").(*modelos.Usuario)
	)
	usuario, err := modelos.GetUsuario(c.Param("id"))
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}
	clientes, err := modelos.GetClientes(usuariologin)
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}
	c.Set("ehEdit", true)
	c.Set("clientes", clientes)
	c.Set("usuario", usuario)
	c.HTML(http.StatusOK, "usuario-editar.html", c.Keys)
}

func SalvarEditarUsuarios(c *gin.Context) {
	var (
		usuario *modelos.Usuario
		err     error
		form    UsuarioForm
	)
	if err = c.Bind(&form); err != nil {
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}

	tx := config.DB.Begin()
	defer tx.Rollback()

	usuario, err = modelos.GetUsuario(c.Param("id"))
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error()+"1", nil)
		return
	}

	SeUsuarioExiste, err := modelos.SeUsuarioExiste(form.LogUsu, form.DesEma, fmt.Sprintf("%d", usuario.CodUsu))
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}

	if SeUsuarioExiste {
		addFlash(c, "Usuario com estas credenciais já cadastrado!")
		c.Redirect(http.StatusSeeOther, "/usuarios/editar/"+c.Param("id"))
		return
	}

	usuario.DesEma = form.DesEma
	usuario.NomUsu = form.NomUsu
	usuario.LogUsu = form.LogUsu
	usuario.SitUsu = form.SitUsu
	usuario.TipUsu = form.TipUsu
	usuario.RecEma = form.RecEma
	usuario.VerAtv = form.VerAtv
	usuario.CodCli = form.CodCli
	usuario.DatAlt = time.Now()

	if c.PostForm("hassen") != "" {
		if c.PostForm("hassen") == c.PostForm("hassenconfirm") {
			hash, erro := bcrypt.GenerateFromPassword([]byte(c.PostForm("hassen")), bcrypt.DefaultCost)
			if erro != nil {
				c.String(http.StatusInternalServerError, erro.Error(), nil)
				return
			}
			usuario.HasSen = sql.NullString{Valid: true, String: string(hash)}
		}
	}
	if err := tx.Table(usuario.TableName()).Save(&usuario).Error; err != nil {
		c.String(http.StatusInternalServerError, err.Error()+"6", nil)
		return
	}
	if err := tx.Commit().Error; err != nil {
		c.String(http.StatusInternalServerError, err.Error()+"7", nil)
		return
	}
	c.Redirect(http.StatusSeeOther, "/usuarios")
}

func DeletarUsuarios(c *gin.Context) {
	usuario := modelos.Usuario{}
	err := config.DB.Where("codusu = ?", c.Param("id")).First(&usuario).Error
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error()+"1", nil)
		return
	}
	count, err := modelos.CountUsuarioAntesDeletar(c.Param("id"))
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error()+"2", nil)
		return
	}
	if count == 0 {
		err = config.DB.Delete(&usuario).Error
		if err != nil {
			c.String(http.StatusInternalServerError, err.Error()+"2", nil)
			return
		}
	} else {
		c.Set("erro", "Usuário não pode ser excluido pois já efetuou movimentos")
		c.HTML(http.StatusOK, "usuario-index.html", c.Keys)
		return
	}
	c.Redirect(http.StatusSeeOther, "/usuarios")
}
