package router

import (
	"net/http"

	"martinelli/seletivomartinelli/app/config"
	"martinelli/seletivomartinelli/app/modelos"

	"github.com/gin-gonic/gin"
)

func IndexEtapa(c *gin.Context) {
	etapas, err := modelos.GetEtapas()
	if err != nil {
		handleError(c, err)
		return
	}
	c.Set("Etapas", etapas)
	c.HTML(http.StatusOK, "etapa-index.html", c.Keys)
}
func NovaEtapa(c *gin.Context) {
	c.HTML(http.StatusOK, "etapa-novo.html", c.Keys)
}

func SaveEtapa(c *gin.Context) {
	var form struct {
		DesEta string `form:"deseta"`
	}
	if err := c.Bind(&form); err != nil {
		return
	}
	tx := config.DB.Begin()
	defer tx.Rollback()
	etapa := &modelos.Etapa{
		DesEta: form.DesEta,
	}
	if err := tx.Create(&etapa).Error; err != nil {
		tx.Rollback()
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}
	if err := tx.Commit().Error; err != nil {
		c.String(http.StatusInternalServerError, err.Error(), nil)
		return
	}

	c.Redirect(http.StatusSeeOther, "/etapa")
}
func DeletarEtapa(c *gin.Context) {
	etapa := modelos.Etapa{}
	err := config.DB.Where("codeta = ?", c.Param("id")).First(&etapa).Error
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error()+"1", nil)
		return
	}

	err = config.DB.Delete(&etapa).Error
	if err != nil {
		addFlash(c, "Etapa não pode ser excluida pois já existem movimentos")
		c.Redirect(http.StatusSeeOther, "/etapa")
		return

	}
	c.Redirect(http.StatusSeeOther, "/etapa")
}
