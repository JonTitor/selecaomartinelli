package router

import (
	"net/http"

	"martinelli/seletivomartinelli/app/modelos"

	"github.com/gin-gonic/gin"
)

func IndexAnalise(c *gin.Context) {

	usuarios, err := modelos.GetUsuarios("C")
	if err != nil {
		handleError(c, err)
		return
	}
	c.Set("Usuarios", usuarios)
	c.HTML(http.StatusOK, "analise-index.html", c.Keys)
}

func GraficoAnalise(c *gin.Context) {

	var form struct {
		CodUsu string `form:"codusu"`
	}

	if err := c.Bind(&form); err != nil {
		return
	}
	desetas, err := modelos.GetEtapasName()
	if err != nil {
		handleError(c, err)
		return
	}
	usuario, err := modelos.GetUsuario(form.CodUsu)
	if err != nil {
		handleError(c, err)
		return
	}
	vlrresultado, err := modelos.GetResultadoVlr(usuario.CodUsu)
	if err != nil {
		handleError(c, err)
		return
	}

	resultados, err := modelos.GetResultadosPorUsuario(usuario.CodUsu)
	usuarios, err := modelos.GetUsuarios("C")
	if err != nil {
		handleError(c, err)
		return
	}
	TemResultado := modelos.CountResultadoUsuarioTotal(usuario.CodUsu)
	c.Set("TemResultado", TemResultado)
	c.Set("Usuarios", usuarios)
	c.Set("DescricaoEtapas", desetas)
	c.Set("ValoresResultado", vlrresultado)
	c.Set("UsuarioConsulta", usuario)
	c.Set("Resultados", resultados)
	c.HTML(http.StatusOK, "analise-grafico.html", c.Keys)
}
