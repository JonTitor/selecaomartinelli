package router

import (
	"fmt"
	"html/template"
	"io"
	"net/http"

	"martinelli/seletivomartinelli/app/config"
	"martinelli/seletivomartinelli/app/fileb0x/assets"
	"martinelli/seletivomartinelli/app/fileb0x/tmpl"
	"martinelli/seletivomartinelli/app/modelos"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/utrack/gin-csrf"
)

const (
	sessionSecret = "654321qweasdzxc"
)

func IniciaServidorHTTP(logWriter io.Writer, porta int) {
	gin.SetMode(config.Config.Gin.Mode)
	NewRouter(logWriter).Run(fmt.Sprintf(":%d", porta))
}

func NewRouter(logWriter io.Writer) *gin.Engine {
	routerInit := gin.New()
	if gin.Mode() != gin.TestMode {
		routerInit.Use(gin.RecoveryWithWriter(logWriter))
	}

	routerInit.Use(sessions.Sessions("chamado", sessions.NewCookieStore([]byte(sessionSecret))))

	if gin.Mode() != gin.TestMode {
		routerInit.Use(csrf.Middleware(csrf.Options{
			Secret: string(sessionSecret),
			ErrorFunc: func(c *gin.Context) {
				c.String(http.StatusBadRequest, "Invalid CSRF token")
				c.Abort()
			},
		}))

		routerInit.Use(func(c *gin.Context) {
			token := csrf.GetToken(c)
			c.Set("CSRFToken", token)
			c.Set("CSRFInput", template.HTML(fmt.Sprintf(
				`<input type="hidden" name="_csrf" value="%s" />`,
				token,
			)))
		})
	}

	routerInit.Use(mainMiddleware())

	routerInit.SetHTMLTemplate(tmpl.Templates)
	routerInit.StaticFile("/logo", "logo.png")
	routerInit.StaticFS("/assets", assets.HTTP)
	routerInit.Static("/fotos", "./fotos")

	routerInit.Use(func(c *gin.Context) {
		var codusu interface{}

		if gin.Mode() == gin.TestMode {
			codusu, _ = c.Cookie("codusu")
		} else {
			s := sessions.Default(c)
			codusu = s.Get("codusu")
		}
		if codusu != nil {
			usuario, err := modelos.GetUsuario(codusu.(string))
			if err == nil {
				c.Set("Usuario", usuario)

			}
		}
	})

	routerInit.GET("/", index)

	usuario := routerInit.Group("/usuario")
	usuario.GET("/novo", NovoUsuarios)
	usuario.POST("/save", SaveUsuario)

	admin := routerInit.Group("/admin")
	admin.GET("/", adminIndex)
	admin.POST("/save", adminIndexPost)
	admin.GET("/login/", adminLogin)
	admin.POST("/login/", adminLoginPost)
	admin.POST("/logout", adminLogout)

	return routerInit
}

func wrapErr(f func(c *gin.Context) error) gin.HandlerFunc {
	return func(c *gin.Context) {
		if err := f(c); err != nil {
			handleError(c, err)
		}
	}
}
