package config

import (
	"encoding/json"
	"io/ioutil"
	"path/filepath"
	"strconv"

	"sardo/helpdesk/util"

	"github.com/kardianos/osext"
	"gopkg.in/ini.v1"
)

var (
	ArquivoIniChave = []byte("fLy,M'uzDGpQG6`KGXIFshHc0jz&RL:z")
	PastaExe, _     = osext.ExecutableFolder()
)

type ConfiguracaoJson struct {
	Porta string
	Banco struct {
		Port     string
		Host     string
		User     string
		Password string
		Database string
		SSLMode  string
	}
}

type Configuracao struct {
	Banco
	Sistema
	HTTP
	SMTP
	Gorm
	Gin
	API
}
type Banco struct {
	Servidor string
	Porta    string
	Usuario  string
	Senha    string
	Banco    string
	SSLMode  string
}

type Sistema struct {
	SenhaAdministracao string
	MinutosSessao      int
	Controleacesso     string
}
type HTTP struct {
	PortaHTTP   int
	CacheHeader bool
	Gzip        bool
}
type SMTP struct {
	Ativo     bool
	Host      string
	PortaSMTP int
	Email     string
	Senha     string
	SSL       bool
}
type Gin struct {
	Mode string
}
type Gorm struct {
	LogMode bool
}
type API struct {
	Token string
}

var Config Configuracao

var defaults = Configuracao{
	Banco: Banco{
		Servidor: "localhost",
		Porta:    "5432",
		SSLMode:  "disable",
	},
	Sistema: Sistema{
		SenhaAdministracao: "admin",
		MinutosSessao:      10,
		Controleacesso:     "",
	},
	SMTP: SMTP{
		Ativo: false,
		SSL:   true,
	},
	HTTP: HTTP{
		PortaHTTP:   9191,
		CacheHeader: true,
		Gzip:        true,
	},
	Gin: Gin{
		Mode: "release",
	},
	Gorm: Gorm{
		LogMode: false,
	},
	API: API{
		Token: "abcdef123456",
	},
}

func init() {
	Config = defaults
}

var ConfigJson ConfiguracaoJson

func CarregaConfiguracao(arquivo string, criptografado bool) error {
	var (
		cfg *ini.File
		err error
	)

	if criptografado {
		var bts []byte
		bts, err = ioutil.ReadFile(arquivo)
		if err != nil {
			return err
		}
		descriptografado := []byte(util.Decrypt(ArquivoIniChave, string(bts)))
		cfg, err = ini.Load(descriptografado)
	} else {
		cfg, err = ini.Load(arquivo)
	}
	if err != nil {
		return err
	}
	Config = defaults
	return cfg.MapTo(&Config)
}

func ParaAbsoluto(str string) string {
	if len(str) == 0 || filepath.IsAbs(str) {
		return str
	}

	path := filepath.Join(PastaExe, str)
	path, _ = filepath.Abs(path)
	return path
}

func CarregaConfiguracaoJson() error {
	file, err := ioutil.ReadFile("config.json")
	if err != nil {
		return err
	}
	erro := json.Unmarshal(file, &ConfigJson)
	if erro != nil {
		return err
	}
	portint, err := strconv.Atoi(ConfigJson.Porta)
	if err != nil {
		return err
	}
	Config.HTTP.PortaHTTP = portint
	Config.Banco.Porta = ConfigJson.Banco.Port
	Config.Banco.Senha = ConfigJson.Banco.Password
	Config.Banco.Servidor = ConfigJson.Banco.Host
	Config.Banco.SSLMode = ConfigJson.Banco.SSLMode
	Config.Banco.Usuario = ConfigJson.Banco.User

	return nil
}
