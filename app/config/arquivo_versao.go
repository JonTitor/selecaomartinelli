package config

import (
	"encoding/json"
	"io/ioutil"
	"path/filepath"
	"time"

	"sardo/helpdesk/util"
)

var (
	ChaveArquivoVersao = []byte(".3e1fHh$/Fzvd'4R7Xl#/J+:c4D,OSwx")
)

func EhVersaoCompleta() bool {
	v, err := GetArquivoVersao()
	if err != nil {
		return false
	}
	return v.EhVersaoCompleta()
}

func EhVersaoDemo() bool {
	return !EhVersaoCompleta()
}

type ArquivoVersao struct {
	CNPJ          int64 `json:"cnpj"`
	DataExpiracao int64 `json:"data_expiracao"`
	DataGeracao   int64 `json:"data_geracao"`

	ehValido *bool
}

func (v *ArquivoVersao) EstaExpirado() bool {
	return time.Unix(v.DataExpiracao, 0).Before(time.Now().Truncate(time.Hour * 24))
}

func (v *ArquivoVersao) EhValido() bool {
	if v.ehValido != nil {
		return *v.ehValido
	}

	var cnpjs []int64
	err := DB.
		Select("numcgc").
		Table("d020emp").
		Where("tipemp = 'E'").
		Order("numcgc").
		Pluck("numcgc", &cnpjs).
		Error
	if err != nil {
		return false
	}

	for _, cnpj := range cnpjs {
		if cnpj == arquivoVersao.CNPJ {
			ehValido := true
			v.ehValido = &ehValido
			return ehValido
		}

	}
	ehValido := false
	v.ehValido = &ehValido
	return ehValido
}

func (v *ArquivoVersao) EhVersaoCompleta() bool {
	return v.EhValido() && !v.EstaExpirado()
}

func getArquivoVersao() (*ArquivoVersao, error) {
	var (
		caminhoArquivo = filepath.Join(PastaExe, "v.bin")
		v              *ArquivoVersao
	)
	data, err := ioutil.ReadFile(caminhoArquivo)
	if err != nil {
		return nil, err
	}
	descriptografado := util.Decrypt(ChaveArquivoVersao, string(data))
	if err = json.Unmarshal([]byte(descriptografado), &v); err != nil {
		return nil, err
	}
	return v, nil
}

var (
	arquivoVersao         *ArquivoVersao
	errArquivoVersao      error
	carregouArquivoVersao = false
)

func GetArquivoVersao() (*ArquivoVersao, error) {
	if !carregouArquivoVersao {
		arquivoVersao, errArquivoVersao = getArquivoVersao()
		carregouArquivoVersao = true
	}
	return arquivoVersao, errArquivoVersao
}
