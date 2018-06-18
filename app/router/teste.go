package router

import (
	"fmt"
	"net/http"

	"martinelli/seletivomartinelli/app/config"
	"martinelli/seletivomartinelli/app/modelos"

	"github.com/gin-gonic/gin"
)

func IndexTeste(c *gin.Context) {
	etapas, err := modelos.GetEtapas()
	if err != nil {
		handleError(c, err)
		return
	}

	c.Set("Etapas", etapas)
	c.HTML(http.StatusOK, "teste-index.html", c.Keys)
}

func TesteEtapa(c *gin.Context) {
	perguntas, err := modelos.GetPerguntas(c.Param("id"))
	if err != nil {
		handleError(c, err)
		return
	}
	alternativas, err := modelos.GetTodasAlternativas()
	if err != nil {
		handleError(c, err)
		return
	}
	c.Set("Alternativas", alternativas)
	c.Set("Perguntas", perguntas)
	c.HTML(http.StatusOK, "teste-etapa.html", c.Keys)
}

func SaveTeste(c *gin.Context) {
	var form struct {
		CodEta int       `form:"codeta"`
		VlrRes []float64 `form:"vlrres"`
	}
	if err := c.Bind(&form); err != nil {
		return
	}
	tx := config.DB.Begin()
	defer tx.Rollback()
	usuario := c.MustGet("Usuario").(*modelos.Usuario)

	ExisteResultado := modelos.CountResultadoUsuario(form.CodEta, usuario.CodUsu)
	if ExisteResultado != true {
		etapa, _ := modelos.GetEtapaInt(form.CodEta)
		tx.Rollback()
		addFlash(c, fmt.Sprintf("A etapa %s ja foi respondida por você!Tente outra etapa", etapa.DesEta))
		c.Redirect(http.StatusSeeOther, "/teste")
		return
	}
	vlrtot := 0.0
	for i := range form.VlrRes {
		vlrtot = form.VlrRes[i] + vlrtot
	}
	countP := modelos.CountPerguntas(form.CodEta)
	vlrres := vlrtot / float64(countP)
	resultado := &modelos.Resultado{
		CodUsu: usuario.CodUsu,
		CodEta: form.CodEta,
		VlrRes: vlrres,
	}
	if err := tx.Create(&resultado).Error; err != nil {
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
