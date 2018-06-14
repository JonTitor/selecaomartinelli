package modelos
import (
	"martinelli/seletivomartinelli/app/config"
)

type Cidade struct {
	CodCid int    `gorm:"column:codcid;primary_key;auto_increment"`
	NomCid string `gorm:"column:nomcid;type:varchar(120);"`
	CodEst int    `gorm:"column:codest;"`
	CidIbg int    `gorm:"column:cidibg;"`

	Estados *Estado `gorm:"ForeignKey:CodEst;AssociationForeignKey:CodEst"`
}

func (*Cidade) TableName() string { return "s030cid" }

func GetCidades() (cidade []*Cidade, err error) {
	linhas := config.DB.Order("nomcid")

	err = linhas.
		Find(&cidade).
		Error
	return
}