package util

import (
	"strconv"
)

func ValidaCpf(strCpf string) bool {
	var Soma int
	var Resto int
	var i int
	Soma = 0
	CountD := len([]rune(strCpf))
	if CountD < 11 {
		return false
	}
	if strCpf == "00000000000" {
		return false
	}

	i = 1
	for i <= 9 {
		strconvint, err := strconv.Atoi(strCpf[i-1 : i])
		if err != nil {
			return false
		}
		Soma := Soma + strconvint*(11-i)
		Resto = (Soma * 10) % 11
		i++
	}

	if (Resto == 10) || (Resto == 11) {
		Resto = 0
		strconvint, err := strconv.Atoi(strCpf[9:10])
		if err != nil {
			return false
		}
		if Resto != strconvint {
			return false
		}
	}
	Soma = 0
	i = 1
	for i <= 10 {
		strconvint, err := strconv.Atoi(strCpf[i-1 : i])
		if err != nil {
			return false
		}
		Soma = Soma + strconvint*(12-i)
		Resto = (Soma * 10) % 11
		i++
	}

	if (Resto == 10) || (Resto == 11) {
		Resto = 0
	}
	strconvint, err := strconv.Atoi(strCpf[10:11])
	if err != nil {
		return false
	}
	if Resto != strconvint {
		return false
	}
	return true
}

func LimitarCarct(texto string, tamanho int) string {

	if len(texto) > tamanho {

		texto = texto[0:tamanho] + "..."

	}
	return texto
}
