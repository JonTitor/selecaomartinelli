package migracoes

import (
	"github.com/jinzhu/gorm"
	"gopkg.in/gormigrate.v1"

	"martinelli/seletivomartinelli/app/config"
	"martinelli/seletivomartinelli/app/modelos"
)

func EfetuarMicracao() error {
	if config.DB.HasTable("migration") {
		config.DB.Exec("ALTER TABLE migration RENAME TO c010mig")
		config.DB.Exec("ALTER TABLE c010mig RENAME COLUMN id TO codmig")
	}

	options := &gormigrate.Options{
		TableName:      "c010mig",
		IDColumnName:   "codmig",
		UseTransaction: false,
	}
	m := gormigrate.New(config.DB, options, []*gormigrate.Migration{
		{
			ID:      "201805031100",
			Migrate: func(_ *gorm.DB) error { return nil },
		},
	})
	m.InitSchema(func(tx *gorm.DB) error {
		err := tx.AutoMigrate(
			&modelos.Pais{},
			&modelos.Estado{},
			&modelos.Cidade{},
			&modelos.Usuario{},
			&modelos.Usuario_Comum{},
			&modelos.Usuario_Empresa{},
		).Error

		if err != nil {
			return err
		}
		referencias := []struct {
			modelo  interface{}
			coluna  string
			destino string
		}{
			{&modelos.Estado{}, "codpais", "s010pais (codpais)"},
			{&modelos.Cidade{}, "codest", "s020est (codest)"},
			{&modelos.Usuario_Comum{}, "codpais", "s010pais (codpais)"},
			{&modelos.Usuario_Comum{}, "codest", "s020est (codest)"},
			{&modelos.Usuario_Comum{}, "codcid", "s030cid (codcid)"},
			{&modelos.Usuario_Comum{}, "codusu", "s040usu (codusu)"},
			{&modelos.Usuario_Empresa{}, "codpais", "s010pais (codpais)"},
			{&modelos.Usuario_Empresa{}, "codest", "s020est (codest)"},
			{&modelos.Usuario_Empresa{}, "codcid", "s030cid (codcid)"},
			{&modelos.Usuario_Empresa{}, "codusu", "s040usu (codusu)"},
		}
		for _, r := range referencias {
			err = tx.Model(r.modelo).AddForeignKey(r.coluna, r.destino, "RESTRICT", "RESTRICT").Error
			if err != nil {
				return err
			}
		}

		return nil

	})
	err := m.Migrate()
	if err != nil {
		return err
	}

	return nil
}
