package modelos

type Pais struct {
	CodPais int    `gorm:"column:codpais;primary_key;auto_increment"`
	NomPais string `gorm:"column:nompais;type:varchar(60);"`
	NomPot  string `gorm:"column:nompot;type:varchar(60);"`
	PaisSig string `gorm:"column:estsig;type:varchar(2);not null"`
	PaisBan int    `gorm:"column:estban;not null"`
}

func (*Pais) TableName() string { return "s010pais" }