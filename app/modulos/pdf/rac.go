package pdf

import (
	"fmt"
	"io"
	"time"

	"sardo/helpdesk/app/modelos"
	"sardo/helpdesk/app/modulos/util"

	"github.com/jung-kurt/gofpdf"
)

type RacOptions struct {
	Writer        io.Writer
	Rac           *modelos.Rac
	RacAtividades []*modelos.RacAtividade
}

func Rac(opts *RacOptions) error {
	pdf := gofpdf.New("P", "mm", "A4", "")
	pdf.AddPage()

	const (
		alturaLinha = 7.0
		largura     = 190.0
		lnDireita   = 0
		lnAbaixo    = 2
	)
	var (
		y  = pdf.GetY()
		tr = pdf.UnicodeTranslatorFromDescriptor("")
		ht float64 // altura total
	)

	writeCell := func(w, h float64, align, borda string, ln int, str string, args ...interface{}) {
		str = fmt.Sprintf(str, args...)
		str = tr(str)
		pdf.CellFormat(w, h, str, borda, ln, align, false, 0, "")

	}
	multiwriteCell := func(w, h float64, align, borda string, ln int, str string, args ...interface{}) {
		str = fmt.Sprintf(str, args...)
		str = tr(str)
		pdf.MultiCell(w, h, str, borda, align, false)

	}

	pdf.SetFont("Helvetica", "", 10)
	writeCell(largura/4, alturaLinha, "CM", "1", lnDireita, "")
	pdf.SetFont("Helvetica", "B", 12)
	writeCell(largura/2, alturaLinha, "CM", "1", lnDireita, `RAC - Registro de atendimento ao cliente`)
	pdf.SetFont("Helvetica", "", 10)
	writeCell(largura/4, alturaLinha, "CM", "1", lnDireita, "RAC %d", opts.Rac.CodRac)
	pdf.Ln(-1)
	// espaçamento
	writeCell(largura*0.30, alturaLinha, "", " ", lnDireita, "")
	pdf.Ln(-1)

	pdf.SetFont("Helvetica", "B", 9)
	writeCell(largura/4, alturaLinha, "CM", "1", lnDireita, "CLIENTE")
	pdf.SetFont("Helvetica", "B", 9)
	writeCell(largura/2, alturaLinha, "CM", "1", lnDireita, `PROJETO`)
	pdf.SetFont("Helvetica", "B", 9)
	writeCell(largura/4, alturaLinha, "CM", "1", lnDireita, "CONSULTOR")
	pdf.Ln(-1)
	pdf.SetFont("Helvetica", "", 9)
	writeCell(largura/4, alturaLinha, "CM", "1", lnDireita, opts.Rac.Cliente.NomCli)
	pdf.SetFont("Helvetica", "", 9)
	writeCell(largura/2, alturaLinha, "CM", "1", lnDireita, opts.Rac.DesRac)
	pdf.SetFont("Helvetica", "", 9)
	consultor, err := modelos.GetUsuario(fmt.Sprintf("%d", opts.Rac.Chamado.CodUsu))
	if err != nil {
		return err
	}
	writeCell(largura/4, alturaLinha, "CM", "1", lnDireita, consultor.NomUsu)
	pdf.Ln(-1)
	// espaçamento
	writeCell(largura*0.80, alturaLinha, "", " ", lnDireita, "")
	pdf.Ln(-1)

	pdf.SetFont("Helvetica", "B", 9)
	writeCell(largura/3, alturaLinha, "CM", "1", lnDireita, "DATA")
	pdf.SetFont("Helvetica", "B", 9)
	writeCell(largura/3, alturaLinha, "CM", "1", lnDireita, `TEMPO TOTAL`)
	pdf.SetFont("Helvetica", "B", 9)
	writeCell(largura/3, alturaLinha, "CM", "1", lnDireita, "SITUAÇÃO")
	pdf.Ln(-1)
	pdf.SetFont("Helvetica", "", 9)
	writeCell(largura/3, alturaLinha, "CM", "1", lnDireita, opts.Rac.DatCad.Format("02/01/2006"))
	pdf.SetFont("Helvetica", "", 9)

	writeCell(largura/3, alturaLinha, "CM", "1", lnDireita, util.FormataDuration(float64(opts.Rac.TemRac)))
	pdf.SetFont("Helvetica", "", 9)
	if opts.Rac.SitRac == "N" {
		writeCell(largura/3, alturaLinha, "CM", "1", lnDireita, "Não Aprovado")
	} else {
		writeCell(largura/3, alturaLinha, "CM", "1", lnDireita, "Aprovado")
	}

	pdf.Ln(-1)
	// espaçamento
	writeCell(largura, alturaLinha/2, "", " ", lnDireita, "")
	pdf.Ln(-1)
	pdf.SetFont("Helvetica", "B", 18)
	writeCell(largura, alturaLinha, "CM", " ", lnDireita, "ATIVIDADES")
	pdf.Ln(-1)
	// espaçamento
	writeCell(largura, alturaLinha/2, "", " ", lnDireita, "")
	pdf.Ln(-1)

	for _, racatv := range opts.RacAtividades {
		pdf.SetFont("Helvetica", "B", 9)
		writeCell(20, alturaLinha, "LM", "1", lnDireita, "DADOS:")
		writeCell(140, alturaLinha, "LM", "1", lnDireita, "COLABORADOR: "+racatv.Usuario.NomUsu)

		writeCell(30, alturaLinha, "LM", "1", lnDireita, "TEMPO: "+util.FormataDuration(float64(racatv.TemAtv)))

		ht += Ln(pdf, -1, alturaLinha)
		pdf.SetFont("Helvetica", "B", 9)
		writeCell(largura, alturaLinha, "CM", "1", lnDireita, "DESCRIÇÃO:")
		ht += Ln(pdf, -1, alturaLinha)
		pdf.SetFont("Helvetica", "", 9)
		multiwriteCell(largura, alturaLinha-2, "LM", "1", lnDireita, racatv.DesAtv)
		ht += Ln(pdf, -1, alturaLinha)
		pdf.SetFont("Helvetica", "B", 9)

		if racatv.AtividadeTipo.TipMed == "T" {
			writeCell(largura/2, alturaLinha, "CM", "1", lnDireita, "INÍCIO")
			writeCell(largura/2, alturaLinha, "CM", "1", lnDireita, "FIM")
			ht += Ln(pdf, -1, alturaLinha)
			for _, racath := range racatv.AtividadeHoras {
				pdf.SetFont("Helvetica", "", 9)
				writeCell(largura/2, alturaLinha, "LM", "1", lnDireita, racath.DatIni.Format("02/01/2006 15:04"))
				writeCell(largura/2, alturaLinha, "LM", "1", lnDireita, racath.DatFim.Format("02/01/2006 15:04"))
				ht += Ln(pdf, -1, alturaLinha)
			}
		}
		if racatv.AtividadeTipo.TipMed == "K" {
			writeCell(largura/2, alturaLinha, "CM", "1", lnDireita, "INÍCIO")
			writeCell(largura/2, alturaLinha, "CM", "1", lnDireita, "FIM")
			ht += Ln(pdf, -1, alturaLinha)
			for _, racatq := range racatv.AtividadeQuantidades {
				pdf.SetFont("Helvetica", "", 9)
				writeCell(largura/2, alturaLinha, "LM", "1", lnDireita, racatq.DatIni.Format("02/01/2006 15:04"))
				writeCell(largura/2, alturaLinha, "LM", "1", lnDireita, racatq.DatFim.Format("02/01/2006 15:04"))
				ht += Ln(pdf, -1, alturaLinha)
			}
		}
		if racatv.AtividadeTipo.TipMed == "V" {
			writeCell(largura, alturaLinha, "CM", "1", lnDireita, "Valor")

			ht += Ln(pdf, -1, alturaLinha)
			writeCell(largura, alturaLinha, "LM", "1", lnDireita, "%.2f", racatv.Atividade.VlrAtv)

		}
		ht += Ln(pdf, -1, alturaLinha)
		pdf.SetFont("Helvetica", "B", 18)
		writeCell(largura*0.80, alturaLinha, "", " ", lnDireita, "")
		ht += Ln(pdf, -1, alturaLinha)
		// Quebra pagina se o conteudo for muito extenso
		if (y + ht) >= 150 {
			pdf.AddPage()
			y = 0
			ht = 0.0
		}

	}

	pdf.SetFont("Helvetica", "B", 9)
	writeCell(largura/2, alturaLinha, "CM", "1", lnDireita, "TEMPO TOTAL:")
	pdf.SetFont("Helvetica", "", 9)
	writeCell(largura/2, alturaLinha, "CM", "1", lnDireita, util.FormataDuration(float64(opts.Rac.TemRac)))
	pdf.Ln(-1)
	pdf.SetFont("Helvetica", "B", 9)
	writeCell(largura/2, alturaLinha, "CM", "1", lnDireita, "VALOR TOTAL")
	pdf.SetFont("Helvetica", "", 9)
	writeCell(largura/2, alturaLinha, "CM", "1", lnDireita, "R$ %.2f", opts.Rac.ValRac)
	pdf.Ln(-1)

	pdf.SetFont("Helvetica", "B", 18)
	writeCell(largura/2, alturaLinha, "", " ", lnDireita, "")
	pdf.Ln(-1)

	pdf.SetFont("Helvetica", "B", 9)
	writeCell(largura/3, alturaLinha, "CM", "1", lnDireita, "CLIENTE")
	pdf.SetFont("Helvetica", "B", 9)
	writeCell(largura/3, alturaLinha, "CM", "1", lnDireita, "CONSULTOR")
	pdf.SetFont("Helvetica", "B", 9)
	writeCell(largura/3, alturaLinha, "CM", "1", lnDireita, "Emissão")
	pdf.Ln(-1)
	pdf.SetFont("Helvetica", "B", 9)
	writeCell(largura/3, alturaLinha*3, "CM", "1", lnDireita, "")
	pdf.SetFont("Helvetica", "B", 9)
	writeCell(largura/3, alturaLinha*3, "CM", "1", lnDireita, "")
	pdf.SetFont("Helvetica", "B", 9)
	writeCell(largura/3, alturaLinha*3, "CM", "1", lnDireita, time.Now().Format("02/01/2006"))

	if err := pdf.Output(opts.Writer); err != nil {
		return err
	}
	return nil
}

// função para retornar o total de altura usada na folha
func Ln(pdf *gofpdf.Fpdf, i, h float64) float64 {
	pdf.Ln(i)
	return h
}
