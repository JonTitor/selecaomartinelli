package modelos

import "martinelli/seletivomartinelli/app/config"

type Pergunta struct {
	CodPer int    `gorm:"column:codper;primary_key;auto_increment"`
	CodEta int    `gorm:"column:codeta;"`
	DesPer string `gorm:"column:desper;type:varchar(255);"`

	Etapas *Etapa `gorm:"ForeignKey:CodEta;AssociationForeignKey:CodEta"`
}

func (*Pergunta) TableName() string { return "s060per" }
func GetPerguntas(codeta string) (perguntas []*Pergunta, err error) {
	linhas := config.DB.Preload("Etapas").
		Where("codeta=?", codeta).Order("codper")

	err = linhas.
		Find(&perguntas).
		Error
	return
}

func GetPergunta(codper string) (*Pergunta, error) {
	pergunta := &Pergunta{}
	err := config.DB.
		Where("codper = ?", codper).
		First(&pergunta).
		Error
	return pergunta, err
}

func CountPerguntas(codeta int) (count int) {
	config.DB.Model(&Pergunta{}).Where("codeta = ?", codeta).Count(&count)
	return count
}
