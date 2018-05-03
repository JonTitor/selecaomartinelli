package modelos

import (
	"database/sql"
	"time"

	"martinelli/seletivomartinelli/app/config"
)

type Usuario struct {
	CodUsu int            `gorm:"column:codusu;primary_key;auto_increment"`
	DesEma string         `gorm:"column:desema;type:varchar(255);"`
	HasSen sql.NullString `gorm:"column:hassen;"`
	DatCad time.Time      `gorm:"column:datcad;type:timestamp(0);not null"`
	DatAlt time.Time      `gorm:"column:datalt;type:timestamp(0);not null"`
	NomUsu string         `gorm:"column:nomusu;type:varchar(255);"`
	LogUsu string         `gorm:"column:logusu;type:varchar(255);"`
	TipUsu string         `gorm:"column:tipusu;type:varchar(1);"`
	SitUsu string         `gorm:"column:situsu;type:varchar(1);"`
}

func (*Usuario) TableName() string { return "s040usu" }

func GetUsuarios() (usuario []*Usuario, err error) {
	linhas := config.DB.Preload("Cliente").
		Joins("LEFT JOIN c100cli ON (c100cli.codcli = c120usu.codcli)").
		Order("nomusu")

	err = linhas.
		Find(&usuario).
		Error
	return
}

func GetUsuario(id string) (*Usuario, error) {
	usuario := &Usuario{}
	err := config.DB.Preload("Cliente").
		Where("codusu = ?", id).
		First(&usuario).
		Error
	return usuario, err
}

func CountUsuario(logusu string, desema string) (int, error) {
	var (
		count int
		err   error
	)
	linhas := config.DB.Table("c120usu").Preload("Cliente").
		Joins("LEFT JOIN c100cli ON (c100cli.codcli = c120usu.codcli)").
		Where("(logusu = ? or desema = ?)", logusu, desema)

	err = linhas.Count(&count).Error
	if err != nil {
		return -1, err
	}
	return count, nil

}
func SeUsuarioExiste(nomusu string, desema string, codusu string) (bool, error) {
	var (
		count int
		err   error
	)
	linhas := config.DB.Table("c120usu").
		Where("(logusu = ? or desema = ?) and codusu <> ?", nomusu, desema, codusu)

	err = linhas.Count(&count).Error
	if err != nil {
		return false, err
	}
	if count > 0 {
		return true, nil
	} else {
		return false, nil
	}

}
