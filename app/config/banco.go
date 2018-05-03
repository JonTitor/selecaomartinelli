package config

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var DB *gorm.DB

func IniciaConexao() error {
	var err error

	connString := fmt.Sprintf(
		"host=%s port=%s user=%s password=%s dbname=%s sslmode=%s",
		Config.Banco.Servidor,
		Config.Banco.Porta,
		Config.Banco.Usuario,
		Config.Banco.Senha,
		Config.Banco.Banco,
		Config.Banco.SSLMode,
	)

	DB, err = gorm.Open("postgres", connString)
	if err != nil {
		return err
	}
	DB = DB.Set("gorm:save_associations", false)

	DB = DB.LogMode(true)
	DB.SingularTable(true)

	return nil
}
