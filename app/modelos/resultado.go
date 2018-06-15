package modelos

type Resultado struct {
	CodRes int     `gorm:"column:codres;primary_key;auto_increment"`
	CodUsu int     `gorm:"column:codusu;"`
	CodEta int     `gorm:"column:codeta;"`
	VlrRes float64 `gorm:"column:vlrres"`

	Usuarios *Usuario `gorm:"ForeignKey:CodUsu;AssociationForeignKey:CodUsu"`
	Etapas   *Etapa   `gorm:"ForeignKey:CodEta;AssociationForeignKey:CodEta"`
}

func (*Resultado) TableName() string { return "s080res" }
