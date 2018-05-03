package util

import (
	"encoding/base64"
	"fmt"
	"strconv"
	"strings"
	"unicode"
)

func LeftPad(str string, length int, char string) string {
	for len(str) < length {
		str = char + str
	}
	return str
}

func FormataCPF(num int64) (str string) {
	str = fmt.Sprintf("%d", num)
	str = LeftPad(str, 11, "0")
	str = fmt.Sprintf("%s.%s.%s-%s", str[0:3], str[3:6], str[6:9], str[9:11])
	return
}

func FormataCNPJ(num int64) (str string) {
	str = fmt.Sprintf("%d", num)
	str = LeftPad(str, 14, "0")
	str = fmt.Sprintf("%s.%s.%s/%s-%s", str[0:2], str[2:5], str[5:8], str[8:12], str[12:14])
	return
}

func FormataCEP(num int64) (str string) {
	str = fmt.Sprintf("%d", num)
	str = LeftPad(str, 8, "0")
	str = fmt.Sprintf("%s-%s", str[0:5], str[5:8])
	return
}

func FormataPIS(num int64) (str string) {
	str = fmt.Sprintf("%d", num)
	str = LeftPad(str, 11, "0")
	str = fmt.Sprintf("%s.%s.%s.%s", str[0:3], str[3:8], str[8:10], str[10:11])
	return
}

func FormataCBO(cbo string) (str string) {
	str = LeftPad(cbo, 6, "0")
	str = fmt.Sprintf("%s-%s", str[0:4], str[4:6])
	return
}

func FormataCTPS(numCtp int64, serCtp string) (str string) {
	str = fmt.Sprintf("%d", numCtp)
	str = fmt.Sprintf("%s %s", LeftPad(str, 8, "0"), LeftPad(serCtp, 5, "0"))
	return
}

func RemoveZerosDaFrente(str string) string {
	var (
		old           = []rune(str)
		new           = []rune{}
		achouPrimeiro = false
	)
	for _, rn := range old {
		if achouPrimeiro {
			new = append(new, rn)
			continue
		}
		if rn == '0' {
			continue
		}
		new = append(new, rn)
		achouPrimeiro = true
	}
	return string(new)
}

func ApenasDigitos(str string) string {
	var result []rune
	for _, char := range str {
		if unicode.IsDigit(char) {
			result = append(result, char)
		}
	}
	return string(result)
}

func Base64Decode(s string) string {
	data, _ := base64.StdEncoding.DecodeString(s)
	return string(data)
}

func Base64Encode(s string) string {
	return base64.StdEncoding.EncodeToString([]byte(s))
}

func Trim(s string) string {
	return strings.Join(strings.Fields(s), " ")
}

func Capitalizar(str string) string {
	str = strings.ToLower(str)
	nomes := strings.Fields(str)
	results := make([]string, 0, len(nomes))
	for i, nome := range nomes {
		if i == 0 || deveCapitalizar(nome) {
			results = append(results, strings.Title(nome))
		} else {
			results = append(results, nome)
		}
	}
	return strings.Join(results, " ")
}

func deveCapitalizar(nome string) bool {
	switch nome {
	case "do", "dos", "da", "das", "de", "e":
		return false
	default:
		return true
	}
}

func EhCPFValido(cpf int64) bool {
	var (
		cpfStr = LeftPad(fmt.Sprintf("%d", cpf), 11, "0")
		soma   int
		resto  int
	)

	if len(cpfStr) != 11 {
		return false
	}

	for i := 1; i <= 9; i++ {
		inteiro, err := strconv.Atoi(cpfStr[i-1 : i])
		if err != nil {
			return false
		}
		soma += inteiro * (11 - i)
		resto = (soma * 10) % 11
	}

	if (resto == 10) || (resto == 11) {
		resto = 0
		inteiro, err := strconv.Atoi(cpfStr[9:10])
		if err != nil {
			return false
		}
		if resto != inteiro {
			return false
		}
	}

	soma = 0
	for i := 1; i <= 10; i++ {
		inteiro, err := strconv.Atoi(cpfStr[i-1 : i])
		if err != nil {
			return false
		}
		soma += inteiro * (12 - i)
		resto = (soma * 10) % 11
	}

	if (resto == 10) || (resto == 11) {
		resto = 0
	}

	inteiro, err := strconv.Atoi(cpfStr[10:11])
	if err != nil {
		return false
	}
	if resto != inteiro {
		return false
	}

	return true
}
