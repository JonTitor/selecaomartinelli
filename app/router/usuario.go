package router

import (
	"net/http"

	"martinelli/seletivomartinelli/app/modelos"

	"github.com/gin-gonic/gin"
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
