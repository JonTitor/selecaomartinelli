package modelos

import (
	"database/sql"
	"time"

	"martinelli/seletivomartinelli/app/config"

	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"
)

type Usuario struct {
	CodUsu  int            `gorm:"column:codusu;primary_key;auto_increment"`
	DesEma  string         `gorm:"column:desema;type:varchar(255);"`
	HasSen  sql.NullString `gorm:"column:hassen;"`
	DatCad  time.Time      `gorm:"column:datcad;type:timestamp(0);not null"`
	DatAlt  time.Time      `gorm:"column:datalt;type:timestamp(0);not null"`
	NomUsu  string         `gorm:"column:nomusu;type:varchar(255);"`
	LogUsu  string         `gorm:"column:logusu;type:varchar(255);"`
	DatNac  string         `gorm:"column:datnac;type:date;not null"`
	NumCpf  string         `gorm:"column:numcpf;not null"`
	NumTel  string         `gorm:"column:numtel;type:varchar(15);"`
	CodPais int            `gorm:"column:codpais;not null;"`
	CodCid  int            `gorm:"column:codcid;not null;"`
	CodEst  int            `gorm:"column:codest;not null;"`
	NomEnd  string         `gorm:"column:usuend;not null;"`
	TipUsu  string         `gorm:"column:tipusu;type:varchar(1);"`

	Paises  *Pais   `gorm:"ForeignKey:CodPais;AssociationForeignKey:CodPais"`
	Estados *Estado `gorm:"ForeignKey:CodEst;AssociationForeignKey:CodEst"`
	Cidades *Cidade `gorm:"ForeignKey:CodCid;AssociationForeignKey:CodCid"`
}

func (*Usuario) TableName() string { return "s040usu" }

func (u *Usuario) EhEmpresa() bool { return u.TipUsu == "E" }
func (u *Usuario) EhComum() bool   { return u.TipUsu == "C" }

func GetUsuarios(tipusu string) (usuario []*Usuario, err error) {
	linhas := config.DB.Preload("Paises").Preload("Estados").Preload("Cidades")
	if tipusu != "" {
		linhas = linhas.Where("tipusu = ?", tipusu)
	}
	linhas = linhas.Order("nomusu")
	err = linhas.
		Find(&usuario).
		Error
	return
}

func GetUsuario(id string) (*Usuario, error) {
	usuario := &Usuario{}
	err := config.DB.Preload("Paises").Preload("Estados").Preload("Cidades").
		Where("codusu = ?", id).
		First(&usuario).
		Error
	return usuario, err
}

func CountUsuario(logusu string, desema string) (int, error) {
	var (
		count int
		err   error
	)
	linhas := config.DB.Table("s040usu").
		Where("(logusu = ? or desema = ?)", logusu, desema)

	err = linhas.Count(&count).Error
	if err != nil {
		return -1, err
	}
	return count, nil

}
func SeUsuarioExiste(nomusu string, desema string, codusu string) (bool, error) {
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
func CriaUsuarioAdminSeNaoExiste() error {
	var usuario Usuario
	if config.DB.Where("numcpf = ?", 0).First(&usuario).RecordNotFound() {
		usuario = Usuario{
			DesEma:  "",
			DatNac:  "05/05/2001",
			NumCpf:  "0",
			NumTel:  "",
			CodPais: 0,
			CodEst:  0,
			CodCid:  0,
			NomUsu:  "Empresa",
			LogUsu:  "admin",
			TipUsu:  "E",
			DatCad:  time.Now(),
			DatAlt:  time.Now(),
		}
		hash, erro := bcrypt.GenerateFromPassword([]byte("admin"), bcrypt.DefaultCost)
		if erro != nil {
			return erro
		}
		usuario.HasSen = sql.NullString{Valid: true, String: string(hash)}
		return config.DB.Save(&usuario).Error
	}
	return nil
}

// retorna usuário pelo login ou e-mail
// case-insensitive
func GetUsuarioPeloLogin(tx *gorm.DB, login string) (*Usuario, error) {
	var usuario Usuario
	err := tx.
		Where(`
			LOWER(logusu) = LOWER(?)
			OR LOWER(desema) = LOWER(?)
		`, login, login).
		First(&usuario).
		Error
	return &usuario, err
}
func (u *Usuario) SenhaValida(s string) bool {
	if !u.HasSen.Valid || u.HasSen.String == "" {
		return false
	}
	err := bcrypt.CompareHashAndPassword([]byte(u.HasSen.String), []byte(s))
	return err == nil
}
