package util

import (
	"fmt"
	"math"
	"unicode/utf8"
)

func FormataDuration(d float64) (r string) {
	var strhor string
	var strmin string

	hor := math.Floor(d / 60)
	strhor = fpad(hor, 2)
	fmt.Println(hor * 60)

	min := math.Floor(d - (hor * 60))
	for min >= 60 {
		min -= 60
	}
	strmin = fpad(min, 2)

	return fmt.Sprintf("%sh%s", strhor, strmin)
}

func fpad(f float64, n int) (s string) {
	s = fmt.Sprintf("%.0f", f)
	for utf8.RuneCountInString(s) < n {
		s = "0" + s
	}
	return
}
