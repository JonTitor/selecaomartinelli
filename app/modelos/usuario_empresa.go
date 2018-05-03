package modelos

import (
	"time"
)

type Usuario_Empresa struct {
	CodUem  int       `gorm:"column:coduem;primary_key;auto_increment"`
	CodUsu  int       `gorm:"column:codusu;"`
	DatAbt  time.Time `gorm:"column:databt;type:date;not null"`
	NumCnp  int64     `gorm:"column:numcnp;not null"`
	NumTel  string    `gorm:"column:numtel;type:varchar(15);"`
	CodPais int       `gorm:"column:codpais;not null;"`
	CodCid  int       `gorm:"column:codcid;not null;"`
	CodEst  int       `gorm:"column:codest;not null;"`
	NomEnd  string    `gorm:"column:usuend;not null;"`

	Usuarios *Usuario `gorm:"ForeignKey:CodUsu;AssociationForeignKey:CodUsu"`
	Paises   *Pais    `gorm:"ForeignKey:CodPais;AssociationForeignKey:CodPais"`
	Estados  *Estado  `gorm:"ForeignKey:CodEst;AssociationForeignKey:CodEst"`
	Cidades  *Cidade  `gorm:"ForeignKey:CodCid;AssociationForeignKey:CodCid"`
}

func (*Usuario_Empresa) TableName() string { return "s045uem" }
