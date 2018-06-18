package router

import (
	"fmt"
	"net/http"

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
	etapa, err := modelos.GetEtapa(c.Param("id"))
	if err != nil {
		handleError(c, err)
		return
	}
	c.Set("Etapa", etapa)
	c.HTML(http.StatusOK, "pergunta-novo.html", c.Keys)
}

func SavePergunta(c *gin.Context) {
	var form struct {
		DesPer string `form:"desper"`
		CodEta int    `form:"codeta"`
	}
	if err := c.Bind(&form); err != nil {
		return
	}
	tx := config.DB.Begin()
	defer tx.Rollback()
	pergunta := &modelos.Pergunta{
		DesPer: form.DesPer,
		CodEta: form.CodEta,
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

	c.Redirect(http.StatusSeeOther, "/pergunta/index/"+fmt.Sprintf("%d", form.CodEta))
}
func DeletarPergunta(c *gin.Context) {
	pergunta := modelos.Pergunta{}
	err := config.DB.Where("codper = ?", c.Param("id")).First(&pergunta).Error
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error()+"1", nil)
		return
	}

	err = config.DB.Delete(&pergunta).Error
	if err != nil {
		addFlash(c, "Pergunta não pode ser excluida pois já existem movimentos")
		c.Redirect(http.StatusSeeOther, "/pergunta/index/"+fmt.Sprintf("%d", pergunta.CodEta))
		return

	}
	c.Redirect(http.StatusSeeOther, "/pergunta/index/"+fmt.Sprintf("%d", pergunta.CodEta))
}
