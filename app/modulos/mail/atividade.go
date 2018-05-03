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

func EmailAtividade(ehEdit bool, chamado *modelos.Chamado, usuarios []*modelos.Usuario, atividades []*modelos.Atividade) error {
	var w bytes.Buffer
	err := tmpl.Templates.ExecuteTemplate(&w, "email-atividade-novo.html", map[string]interface{}{
		"Chamado":    chamado,
		"EhEdit":     ehEdit,
		"Atividades": atividades,
		// ???
		// "AtividadeHoras":       "???",
		// "AtividadeQuantidades": "???",
	})
	if err != nil {
		return err
	}

	var g errgroup.Group

	for _, u := range usuarios {
		u := u

		g.Go(func() error {
			log.Printf("Enviando e-mail de atividade para: %s", u.DesEma)

			d := getDialer()
			m := gomail.NewMessage()

			m.SetHeader("From", config.Config.SMTP.Email)
			m.SetHeader("To", u.DesEma)
			m.SetHeader("Subject", fmt.Sprintf("Atividade informada no chamado %d", chamado.CodCha))
			m.SetBody("text/html", w.String())
			return d.DialAndSend(m)
		})
	}

	return g.Wait()
}
