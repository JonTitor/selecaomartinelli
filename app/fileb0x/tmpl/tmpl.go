package tmpl

import (
	"html/template"
	"path/filepath"

	"github.com/Masterminds/sprig"
)

var Templates *template.Template

func init() {
	for k, v := range sprig.FuncMap() {
		if _, ok := funcs[k]; !ok {
			funcs[k] = v
		}
	}

	files, err := WalkDirs("", false)
	if err != nil {
		panic(err)
	}

	Templates = template.New("").Funcs(funcs)

	for _, f := range files {
		data, err := ReadFile(f)
		if err != nil {
			panic(err)
		}
		Templates, err = Templates.New(filepath.Base(f)).Parse(string(data))
		if err != nil {
			panic(err)
		}
	}
}
