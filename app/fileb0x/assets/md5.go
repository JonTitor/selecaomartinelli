package assets

import (
	"crypto/md5"
	"fmt"
	"path/filepath"
)

var MD5 map[string]string

func init() {
	files, err := WalkDirs("", false)
	if err != nil {
		panic(err)
	}

	MD5 = make(map[string]string, len(files))

	for _, f := range files {
		data, err := ReadFile(f)
		if err != nil {
			panic(err)
		}
		MD5[filepath.Base(f)] = fmt.Sprintf("%x", md5.Sum(data))
	}
}
