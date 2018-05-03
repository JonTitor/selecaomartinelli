package mail

import (
	"bytes"
	"fmt"

	"sardo/helpdesk/app/config"
	"sardo/helpdesk/app/fileb0x/tmpl"
	"sardo/helpdesk/app/modelos"

	"golang.org/x/sync/errgroup"
	"gopkg.in/gomail.v2"
)

func EmailChamado(ehEdit bool, usuarios []*modelos.Usuario, chamado *modelos.Chamado) error {
	var w bytes.Buffer
	err := tmpl.Templates.ExecuteTemplate(&w, "email-chamado.html", map[string]interface{}{
		"Chamado": chamado,
		"EhEdit":  ehEdit,
	})
	if err != nil {
		return err
	}

	var g errgroup.Group

	for _, u := range usuarios {
		u := u

		g.Go(func() error {
			d := getDialer()
			m := gomail.NewMessage()

			m.SetHeader("From", config.Config.SMTP.Email)
			m.SetHeader("To", u.DesEma)
			if ehEdit {
				m.SetHeader("Subject", fmt.Sprintf("Chamado %d alterado", chamado.CodCha))
			} else {
				m.SetHeader("Subject", fmt.Sprintf("Chamado %d criado", chamado.CodCha))
			}
			m.SetBody("text/html", w.String())
			return d.DialAndSend(m)
		})
	}

	return g.Wait()

}
