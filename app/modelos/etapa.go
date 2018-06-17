package modelos

import "martinelli/seletivomartinelli/app/config"

type Etapa struct {
	CodEta int    `gorm:"column:codeta;primary_key;auto_increment"`
	DesEta string `gorm:"column:deseta;type:varchar(255);"`
}

func (*Etapa) TableName() string { return "s050eta" }

func GetEtapas() (etapas []*Etapa, err error) {
	linhas := config.DB.Order("codeta")

	err = linhas.
		Find(&etapas).
		Error
	return
}

func GetEtapasName() ([]string, error) {
	var etapas []string
	rows, err := config.DB.Select("deseta").Table("s050eta").Rows()
	if err != nil {
		return nil, err
	}
	for rows.Next() {
		var t string
		if err = rows.Scan(&t); err != nil {
			return nil, err
		}
		etapas = append(etapas, t)
	}
	if err = rows.Err(); err != nil {
		return nil, err
	}
	return etapas, nil

}

func GetEtapa(codeta string) (*Etapa, error) {
	etapa := &Etapa{}
	err := config.DB.
		Where("codeta = ?", codeta).
		First(&etapa).
		Error
	return etapa, err
}
