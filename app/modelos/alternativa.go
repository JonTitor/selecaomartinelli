package modelos

import "martinelli/seletivomartinelli/app/config"

type Alternativa struct {
	CodAlt int     `gorm:"column:codalt;primary_key;auto_increment"`
	CodPer int     `gorm:"column:codper;"`
	DesAlt string  `gorm:"column:desalt;type:varchar(255);"`
	VlrAlt float64 `gorm:"column:vlralt;"`

	Perguntas *Pergunta `gorm:"ForeignKey:CodPer;AssociationForeignKey:CodPer"`
}

func (*Alternativa) TableName() string { return "s070alt" }
func GetAlternativas(codper string) (alternativas []*Alternativa, err error) {
	linhas := config.DB.Preload("Perguntas").Preload("Perguntas.Etapas").
		Where("codper=?", codper).Order("codalt")

	err = linhas.
		Find(&alternativas).
		Error
	return
}

func GetAlternativa(codalt string) (*Alternativa, error) {
	alternativa := &Alternativa{}
	err := config.DB.
		Where("codalt = ?", codalt).
		First(&alternativa).
		Error
	return alternativa, err
}
