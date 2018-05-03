package util_test

import (
	"testing"

	"sardo/helpdesk/app/modulos/util"

	"github.com/stretchr/testify/assert"
)

func TestUltimaPagina(t *testing.T) {
	assert.Equal(t, int64(10), util.UltimaPagina(200, 20))
	assert.Equal(t, int64(11), util.UltimaPagina(201, 20))
	assert.Equal(t, int64(11), util.UltimaPagina(220, 20))
	assert.Equal(t, int64(12), util.UltimaPagina(221, 20))
}
