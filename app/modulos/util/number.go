package util

import (
	"math"
)

// UltimaPagina calcula última pagina de paginação de registros SQL
func UltimaPagina(qtdRegistros, qtdPorPagina int64) int64 {
	result := float64(qtdRegistros) / float64(qtdPorPagina)
	floor := math.Floor(result)
	if result-floor > 0 {
		return int64(floor + 1)
	}
	return int64(floor)
}
