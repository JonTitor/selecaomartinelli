package mail

import (
	"bytes"
	"fmt"
	"log"

	"sardo/helpdesk/app/config"
	"sardo/helpdesk/app/fileb0x/tmpl"
	"sardo/helpdesk/app/modelos"

	"golang.org/x/sync/errgroup"
	"gopkg.in/gomail.v2"
)

func EmailComentario(usuarios []*modelos.Usuario, chamado *modelos.Chamado, comentarios []*modelos.Comentario) error {
	var w bytes.Buffer
	err := tmpl.Templates.ExecuteTemplate(&w, "email-comentario-novo.html", map[string]interface{}{
		"Chamado":     chamado,
		"Comentarios": comentarios,
	})
	if err != nil {
		return err
	}

	var g errgroup.Group

	for _, u := range usuarios {
		u := u

		g.Go(func() error {
			log.Printf("Enviando e-mail de comentário para: %s", u.DesEma)

			d := getDialer()
			m := gomail.NewMessage()

			m.SetHeader("From", config.Config.SMTP.Email)
			m.SetHeader("To", u.DesEma)
			m.SetHeader("Subject", fmt.Sprintf("Comentário feito no chamado %d", chamado.CodCha))
			m.SetBody("text/html", w.String())
			return d.DialAndSend(m)
		})
	}

	return g.Wait()
}
