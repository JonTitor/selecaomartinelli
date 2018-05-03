package tmpl

import (
	"html/template"
	"time"

	"sardo/helpdesk/app/modulos/util"

	"github.com/microcosm-cc/bluemonday"
	"github.com/russross/blackfriday"
)

var funcs = map[string]interface{}{
	"intTo64":     intTo64,
	"diffHoras":   diffHoras,
	"markdown":    markdown,
	"formataCNPJ": util.FormataCNPJ,
}

func intTo64(val int) int64 {
	return int64(val)
}

func diffHoras(t1, t2 time.Time) float64 {
	return t2.Sub(t1).Hours()
}

func markdown(str string) template.HTML {
	str = bluemonday.UGCPolicy().Sanitize(str)
	str = string(blackfriday.MarkdownCommon([]byte(str)))
	return template.HTML(str)
}
