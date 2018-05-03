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

func SaveUsuario(c *gin.Context) error {
	var form struct {
		SitItm string `form:"sititm"`
		CodCla int64  `form:"codcla"`
		DesItm string `form:"desitm"`
		Pagina int64  `form:"p"`
		EhPDF  bool   `form:"pdf"`
	}
	if err := c.Bind(&form); err != nil {
		return err
	}
	addFlash(c, "Senha alterada com sucesso")
	return redirect(c, "/")
}
