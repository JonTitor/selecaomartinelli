package router

import (
	"net/http"
	"testing"

	"gopkg.in/stretchr/testify.v1/assert"
)

func TestAdminIndex(t *testing.T) {
	w, r := newTestContext("GET", "/admin/", "")
	r.AddCookie(&http.Cookie{Name: "usuario_administracao", Value: "sardo"})
	serveHTTP(w, r)
	assert.Equal(t, http.StatusOK, w.Code)
}
