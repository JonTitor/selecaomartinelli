package modelos

import (
	"martinelli/seletivomartinelli/app/config"
)

type Estado struct {
	CodEst  int    `gorm:"column:codest;primary_key;auto_increment"`
	NomEst  string `gorm:"column:nomest;type:varchar(75);"`
	UnfEst  string `gorm:"column:unfest;type:varchar(2);"`
	UnfIbg  int    `gorm:"column:unfibg;"`
	CodPais int    `gorm:"column:codpais;"`
	EstDdd  string `gorm:"column:estddd;type:varchar(50)"`

	Paises *Pais `gorm:"ForeignKey:CodPais;AssociationForeignKey:CodPais"`
}

func (*Estado) TableName() string { return "s020est" }
func GetEstados() (estado []*Estado, err error) {
	linhas := config.DB.Order("nomest")

	err = linhas.
		Find(&estado).
		Error
	return
}
