package build

import (
	"time"
)

var (
	Build      = ""
	GitCommit  = ""
	CommitDate = ""
	BuildDate  = ""
)

func init() {
	t, err := time.Parse("2006-01-02", CommitDate)
	if err != nil {
		return
	}
	Build = t.Format("060102")
}
