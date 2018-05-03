package router

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func CadastroIndex(c *gin.Context) {
	c.HTML(http.StatusOK, "cadastro-index.html", c.Keys)
}
