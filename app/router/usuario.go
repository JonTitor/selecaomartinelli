package router

import (
	"database/sql"
	"net/http"
	"time"

	"martinelli/seletivomartinelli/app/config"
	"martinelli/seletivomartinelli/app/modelos"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func IndexUsuarios(c *gin.Context) {
	c.HTML(http.StatusOK, "usuario-index.html", c.Keys)
}
func NovoUsuarios(c *gin.Context) {
	paises, err := modelos.GetPaises()
	if err != nil {
		handleError(c, err)
		return
	}
	estados, err := modelos.GetEstados()
	if err != nil {
		handleError(c, err)
		return
	}
	cidades, err := modelos.GetCidades()
	if err != nil {
		handleError(c, err)
		return
	}
	c.Set("Paises", paises)
	c.Set("Estados", estados)
	c.Set("Cidades", cidades)
	c.HTML(http.StatusOK, "usuario-novo.html", c.Keys)
}

func SaveUsuario(c *gin.Context) {
	var form struct {
		DesEma string    `form:"desema"`
		NomUsu string    `form:"nomusu"`
		DatNas time.Time `form:"datnas"`
		NumCpf int64     `form:"numcpf"`
		NumTel string    `form:"numtel"`
		CodPai int       `form:"codpai"`
		CodEst int       `form:"codest"`
		CodCid int       `form:"codcid"`
		LogUsu string    `form:"logusu"`
		HasSen string    `form:"hassen"`
		HasCon string    `form:"hascon"`
	}
	if err := c.Bind(&form); err != nil {
		return
	}
	tx := config.DB.Begin()
	defer tx.Rollback()
	usuario := &modelos.Usuario{
		DesEma:  form.DesEma,
		DatNac:  form.DatNas,
		NumCpf:  form.NumCpf,
		NumTel:  form.NumTel,
		CodPais: form.CodPai,
		CodEst:  form.CodEst,
		CodCid:  form.CodCid,
		NomUsu:  form.NomUsu,
		LogUsu:  form.LogUsu,
		TipUsu:  "C",
		DatCad:  time.Now(),
		DatAlt:  time.Now(),
	}
	countUsuarioCadastrado, err := modelos.CountUsuario(form.LogUsu, form.DesEma)
	if err != nil {
		return
	}
	if countUsuarioCadastrado > 0 {
		addFlash(c, "Este usuario já está cadastrado!")
		c.Redirect(http.StatusSeeOther, "/usuarios/novo")
		return
	}

	if form.HasSen == form.HasCon {
		hash, erro := bcrypt.GenerateFromPassword([]byte(form.HasSen), bcrypt.DefaultCost)
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
		tx.Rollback()
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}
	if err := tx.Commit().Error; err != nil {
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}

	c.Redirect(http.StatusSeeOther, "/")
}
