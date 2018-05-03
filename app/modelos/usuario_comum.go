package modelos

import (
	"time"

	"martinelli/seletivomartinelli/app/config"
)

type Usuario_Comum struct {
	CodUco  int       `gorm:"column:coduco;primary_key;auto_increment"`
	CodUsu  int       `gorm:"column:codusu;"`
	DatNac  time.Time `gorm:"column:datnac;type:date;not null"`
	NumCpf  int64     `gorm:"column:numcpf;not null"`
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

func (*Usuario_Comum) TableName() string { return "s043uco" }

func GetUsuariosComum() (usuario []*Usuario_Comum, err error) {
	linhas := config.DB.Preload("Cliente").
		Joins("LEFT JOIN c100cli ON (c100cli.codcli = c120usu.codcli)").
		Order("nomusu")

	err = linhas.
		Find(&usuario).
		Error
	return
}

func GetUsuarioComum(id string) (*Usuario, error) {
	usuario := &Usuario{}
	err := config.DB.Preload("Cliente").
		Where("codusu = ?", id).
		First(&usuario).
		Error
	return usuario, err
}

func CountUsuarioComum(logusu string, desema string) (int, error) {
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
func SeUsuarioComumExiste(nomusu string, desema string, codusu string) (bool, error) {
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
