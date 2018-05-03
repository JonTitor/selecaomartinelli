package main

import (
	"io"
	"log"
	"os"

	"martinelli/seletivomartinelli/app/build"
	"martinelli/seletivomartinelli/app/config"
	"martinelli/seletivomartinelli/app/modulos/migracoes"
	"martinelli/seletivomartinelli/app/router"

	"gopkg.in/urfave/cli.v1"
)

var (
	logWriter io.Writer
)

// carrega .ini, configura log e conecta no banco de dados
func setup() {
	// configurando arquivo de log
	logFile, err := os.OpenFile(config.ParaAbsoluto("log.log"), os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
	if err != nil {
		log.Fatal(err)
	}
	logWriter = io.MultiWriter(logFile, os.Stdout)
	log.SetOutput(logWriter)
	log.SetFlags(log.LstdFlags)
	log.Printf("Iniciando aplicação\n")

	// carrega configuração do arquivo
	err = config.CarregaConfiguracao(config.ParaAbsoluto("config.bin"), true)
	if err != nil {
		log.Printf("Não foi possível carregar o arquivo config.bin: %v", err)
		err = config.CarregaConfiguracaoJson()
		if err != nil {
			log.Printf("Não foi possível carregar o arquivo config.json: %v", err)

		}
	}

	log.Printf("Carregado configuração de config.bin\n")
	// inicia a conexão com o banco de dados
	err = config.IniciaConexao()
	if err != nil {
		log.Printf("Não foi possível conectar no banco: %v\n", err)
	} else {
		log.Printf("Feita a conexão com o banco de dados. Rodando migrações de banco...\n")
		err = migracoes.EfetuarMicracao()
		if err != nil {
			log.Printf("Erro ao executar migrações de banco: %v\n", err)
		}
	}

}
func main() {
	app := cli.NewApp()
	app.Name = "Chamado"
	app.Version = build.Build
	app.Flags = []cli.Flag{
		cli.IntFlag{
			Name:  "porta",
			Value: 0,
			Usage: "Porta HTTP usada pelo servidor web. A default é a configurada no arquivo de configuração",
		},
	}
	app.Action = func(c *cli.Context) error {
		setup()
		var porta int
		if c.IsSet("porta") {
			porta = c.Int("porta")
		} else {
			porta = config.Config.HTTP.PortaHTTP
		}

		// iniciando servidor
		log.Printf("Versão %s", build.Build)
		log.Printf("Aplicação rodando na porta %d", porta)

		router.IniciaServidorHTTP(logWriter, porta)
		return nil

	}

	if err := app.Run(os.Args); err != nil {
		log.Fatal(err)
	}
}
