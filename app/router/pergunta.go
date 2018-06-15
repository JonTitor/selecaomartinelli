package router

import (
	"net/http"
	"strconv"

	"martinelli/seletivomartinelli/app/config"
	"martinelli/seletivomartinelli/app/modelos"

	"github.com/gin-gonic/gin"
)

func IndexPergunta(c *gin.Context) {
	perguntas, err := modelos.GetPerguntas(c.Param("id"))
	if err != nil {
		handleError(c, err)
		return
	}
	etapa, err := modelos.GetEtapa(c.Param("id"))
	c.Set("Perguntas", perguntas)
	c.Set("Etapa", etapa)
	c.HTML(http.StatusOK, "pergunta-index.html", c.Keys)
}
func NovaPergunta(c *gin.Context) {
	etapas, err := modelos.GetEtapas()
	if err != nil {
		handleError(c, err)
		return
	}
	c.Set("Etapas", etapas)
	c.HTML(http.StatusOK, "pergunta-novo.html", c.Keys)
}

func SavePergunta(c *gin.Context) {
	var form struct {
		DesPer string `form:"desper"`
	}
	if err := c.Bind(&form); err != nil {
		return
	}
	tx := config.DB.Begin()
	defer tx.Rollback()
	codeta, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return
	}
	pergunta := &modelos.Pergunta{
		DesPer: form.DesPer,
		CodEta: codeta,
	}
	if err := tx.Create(&pergunta).Error; err != nil {
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
