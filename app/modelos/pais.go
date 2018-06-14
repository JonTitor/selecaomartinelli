package modelos

import (
	"martinelli/seletivomartinelli/app/config"
)

type Pais struct {
	CodPais int    `gorm:"column:codpais;primary_key;auto_increment"`
	NomPais string `gorm:"column:nompais;type:varchar(60);"`
	NomPot  string `gorm:"column:nompot;type:varchar(60);"`
	PaisSig string `gorm:"column:paissig;type:varchar(2);"`
	PaisBan int    `gorm:"column:estban;not null"`
}

func (*Pais) TableName() string { return "s010pais" }
func GetPaises() (pais []*Pais, err error) {
	linhas := config.DB.Order("nompais")

	err = linhas.
		Find(&pais).
		Error
	return
}
