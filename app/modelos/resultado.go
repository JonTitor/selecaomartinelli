package modelos

import (
	"martinelli/seletivomartinelli/app/config"
)

type Resultado struct {
	CodRes int     `gorm:"column:codres;primary_key;auto_increment"`
	CodUsu int     `gorm:"column:codusu;"`
	CodEta int     `gorm:"column:codeta;"`
	VlrRes float64 `gorm:"column:vlrres"`

	Usuarios *Usuario `gorm:"ForeignKey:CodUsu;AssociationForeignKey:CodUsu"`
	Etapas   *Etapa   `gorm:"ForeignKey:CodEta;AssociationForeignKey:CodEta"`
}

func (*Resultado) TableName() string { return "s080res" }
func GetResultados() (resultados []*Resultado, err error) {
	linhas := config.DB.Preload("Etapas").Preload("Usuarios").Order("codres")

	err = linhas.
		Find(&resultados).
		Error
	return
}

func GetResultadosPorUsuario(codusu int) (resultados []*Resultado, err error) {
	linhas := config.DB.Preload("Etapas").Preload("Usuarios").
		Where("codusu=?", codusu).
		Order("codres")

	err = linhas.
		Find(&resultados).
		Error
	return
}
func GetResultadoVlr(codusu int) ([]float64, error) {
	var vlrres []float64
	rows, err := config.DB.Select("vlrres").Table("s080res").Where("codusu = ?", codusu).Rows()
	if err != nil {
		return nil, err
	}
	for rows.Next() {
		var t float64
		if err = rows.Scan(&t); err != nil {
			return nil, err
		}
		vlrres = append(vlrres, t)
	}
	if err = rows.Err(); err != nil {
		return nil, err
	}
	return vlrres, nil

}
