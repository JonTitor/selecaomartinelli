package mail

import (
	"bytes"

	"sardo/helpdesk/app/fileb0x/tmpl"

	"github.com/aymerick/douceur/inliner"
	"gopkg.in/gomail.v2"
)

func EmailTeste(d *gomail.Dialer, de, para string) error {
	var w bytes.Buffer
	if err := tmpl.Templates.ExecuteTemplate(&w, "email-teste.html", nil); err != nil {
		return err
	}
	html, err := inliner.Inline(w.String())
	if err != nil {
		return err
	}

	m := gomail.NewMessage()
	m.SetHeader("From", de)
	m.SetHeader("To", para)
	m.SetHeader("Subject", `E-mail de teste - Help Desk`)
	m.SetBody("text/html", html)
	return d.DialAndSend(m)
}
