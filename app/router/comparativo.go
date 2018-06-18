package router

import (
	"net/http"

	"martinelli/seletivomartinelli/app/modelos"

	"github.com/gin-gonic/gin"
)

func IndexComparativo(c *gin.Context) {

	usuarios, err := modelos.GetUsuarios("C")
	if err != nil {
		handleError(c, err)
		return
	}
	c.Set("Usuarios", usuarios)
	c.HTML(http.StatusOK, "comparativo-index.html", c.Keys)
}

func GraficoComparativo(c *gin.Context) {

	var form struct {
		CodUsu string `form:"codusu"`
		UsuCom string `form:"usucom"`
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
	usuariocomp, err := modelos.GetUsuario(form.UsuCom)
	if err != nil {
		handleError(c, err)
		return
	}
	vlrresultado, err := modelos.GetResultadoVlr(usuario.CodUsu)
	if err != nil {
		handleError(c, err)
		return
	}
	vlrresultadocomp, err := modelos.GetResultadoVlr(usuariocomp.CodUsu)
	if err != nil {
		handleError(c, err)
		return
	}

	resultados, err := modelos.GetResultadosPorUsuario(usuario.CodUsu)
	resultadoscomp, err := modelos.GetResultadosPorUsuario(usuariocomp.CodUsu)
	usuarios, err := modelos.GetUsuarios("C")
	if err != nil {
		handleError(c, err)
		return
	}
	TemResultado := modelos.CountResultadoUsuarioTotal(usuario.CodUsu)
	if TemResultado == true {
		TemResultado = modelos.CountResultadoUsuarioTotal(usuariocomp.CodUsu)
	}
	c.Set("TemResultado", TemResultado)
	c.Set("Usuarios", usuarios)
	c.Set("DescricaoEtapas", desetas)
	c.Set("ValoresResultado", vlrresultado)
	c.Set("ValoresResultadoComp", vlrresultadocomp)
	c.Set("UsuarioConsulta", usuario)
	c.Set("UsuarioConsultaComp", usuariocomp)
	c.Set("Resultados", resultados)
	c.Set("ResultadosComp", resultadoscomp)
	c.HTML(http.StatusOK, "comparativo-grafico.html", c.Keys)
}
