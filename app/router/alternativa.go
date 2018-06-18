package router

import (
	"fmt"
	"net/http"

	"martinelli/seletivomartinelli/app/config"
	"martinelli/seletivomartinelli/app/modelos"

	"github.com/gin-gonic/gin"
)

func IndexAlternativa(c *gin.Context) {
	alternativas, err := modelos.GetAlternativas(c.Param("id"))
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}
	pergunta, err := modelos.GetPergunta(c.Param("id"))
	c.Set("Alternativas", alternativas)
	c.Set("Pergunta", pergunta)
	c.HTML(http.StatusOK, "alternativa-index.html", c.Keys)
}
func NovaAlternativa(c *gin.Context) {
	pergunta, err := modelos.GetPergunta(c.Param("id"))
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}
	c.Set("Pergunta", pergunta)
	c.HTML(http.StatusOK, "alternativa-novo.html", c.Keys)
}

func SaveAlternativa(c *gin.Context) {
	var form struct {
		DesAlt string  `form:"desalt"`
		VlrAlt float64 `form:"vlralt"`
		CodPer int     `form:"codper"`
	}
	if err := c.Bind(&form); err != nil {
		return
	}
	tx := config.DB.Begin()
	defer tx.Rollback()
	TemValor := modelos.JaExisteValor(form.CodPer, form.VlrAlt)
	if TemValor != true {
		tx.Rollback()
		addFlash(c, "Já existe uma alternativa com este valor para esta pergunta!")
		c.Redirect(http.StatusSeeOther, "/alternativa/novo/"+fmt.Sprintf("%d", form.CodPer))
		return
	}
	alternativa := &modelos.Alternativa{
		DesAlt: form.DesAlt,
		CodPer: form.CodPer,
		VlrAlt: form.VlrAlt,
	}
	if err := tx.Create(&alternativa).Error; err != nil {
		tx.Rollback()
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}
	if err := tx.Commit().Error; err != nil {
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}

	c.Redirect(http.StatusSeeOther, "/alternativa/index/"+fmt.Sprintf("%d", form.CodPer))
}
func DeletarAlternativa(c *gin.Context) {
	alternativa := modelos.Alternativa{}
	err := config.DB.Where("codalt = ?", c.Param("id")).First(&alternativa).Error
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error()+"1", nil)
		return
	}

	err = config.DB.Delete(&alternativa).Error
	if err != nil {
		addFlash(c, "Alternativa não pode ser excluida pois já existem movimentos")
		c.Redirect(http.StatusSeeOther, "/alternativa/index/"+fmt.Sprintf("%d", alternativa.CodPer))
		return

	}
	c.Redirect(http.StatusSeeOther, "/alternativa/index/"+fmt.Sprintf("%d", alternativa.CodPer))
}
