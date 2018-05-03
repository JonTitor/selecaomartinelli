package mail

import (
	"crypto/tls"

	"sardo/helpdesk/app/config"

	"gopkg.in/gomail.v2"
)

func getDialer() *gomail.Dialer {
	return &gomail.Dialer{
		Host:     config.Config.SMTP.Host,
		Port:     config.Config.SMTP.PortaSMTP,
		Username: config.Config.SMTP.Email,
		Password: config.Config.SMTP.Senha,

		TLSConfig: &tls.Config{InsecureSkipVerify: true},
		SSL:       config.Config.SMTP.SSL,
	}
}
