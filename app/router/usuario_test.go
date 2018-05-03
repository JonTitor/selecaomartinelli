package router

import (
	"net/http"
	"testing"

	"sardo/helpdesk/app/config"
	"sardo/helpdesk/app/modelos"

	"gopkg.in/stretchr/testify.v1/assert"
)

func TestIndexUsuario(t *testing.T) {
	prepareTestDatabase()
	w, r := newTestContext(http.MethodGet, "/usuarios/", "1")
	serveHTTP(w, r)
	assert.Equal(t, http.StatusOK, w.Code)

}
func TestNovoUsuario(t *testing.T) {
	prepareTestDatabase()
	w, r := newTestContext(http.MethodGet, "/usuarios/novo", "1")
	serveHTTP(w, r)
	assert.Equal(t, http.StatusOK, w.Code)
}

func TestSalvarUsuario(t *testing.T) {
	prepareTestDatabase()
	w, r := newTestContext("POST", "/usuarios/save", "1")

	r.PostForm.Add("desema", "jose@jose.com.br")
	r.PostForm.Add("nomusu", "Jose Padilha")
	r.PostForm.Add("logusu", "Jose")
	r.PostForm.Add("situsu", "A")
	r.PostForm.Add("tipusu", "P")
	r.PostForm.Add("recema", "N")
	r.PostForm.Add("veratv", "S")
	r.PostForm.Add("codcli", "1")
	r.PostForm.Add("hassen", "123456")
	r.PostForm.Add("hassenconfirm", "123456")
	serveHTTP(w, r)
	assert.Equal(t, http.StatusSeeOther, w.Code)
	usuario := new(modelos.Usuario)
	if err := config.DB.Where("codusu = (SELECT MAX(codusu) FROM c120usu)").First(&usuario).Error; err != nil {
		t.Errorf("Erro ao buscar usuário: %v", err)
	}

	assert.Equal(t, "jose@jose.com.br", usuario.DesEma)
	assert.Equal(t, "Jose Padilha", usuario.NomUsu)
	assert.Equal(t, "Jose", usuario.LogUsu)
	assert.Equal(t, "A", usuario.SitUsu)
	assert.Equal(t, "P", usuario.TipUsu)
	assert.Equal(t, "N", usuario.RecEma)
	assert.Equal(t, "S", usuario.VerAtv)
	assert.Equal(t, 1, usuario.CodCli)

}

func TestEditarUsuario(t *testing.T) {
	prepareTestDatabase()
	w, r := newTestContext(http.MethodGet, "/usuarios/editar/1", "1")
	serveHTTP(w, r)
	assert.Equal(t, http.StatusOK, w.Code)
}

func TestSalvarEdicaoUsuario(t *testing.T) {
	prepareTestDatabase()
	w, r := newTestContext("POST", "/usuarios/saveeditar/1", "1")
	r.PostForm.Add("desema", "jose@jose.com.br")
	r.PostForm.Add("nomusu", "Jose Padilha2")
	r.PostForm.Add("logusu", "Jose22")
	r.PostForm.Add("situsu", "A")
	r.PostForm.Add("tipusu", "P")
	r.PostForm.Add("recema", "N")
	r.PostForm.Add("veratv", "S")
	r.PostForm.Add("codcli", "2")
	r.PostForm.Add("hassen", "")
	serveHTTP(w, r)
	assert.Equal(t, http.StatusSeeOther, w.Code)

	var usuario modelos.Usuario
	assert.NoError(t, config.DB.Where("codusu = ?", 1).First(&usuario).Error)
	assert.Equal(t, "jose@jose.com.br", usuario.DesEma)
	assert.Equal(t, "Jose Padilha2", usuario.NomUsu)
	assert.Equal(t, "Jose22", usuario.LogUsu)
	assert.Equal(t, "A", usuario.SitUsu)
	assert.Equal(t, "P", usuario.TipUsu)
	assert.Equal(t, "N", usuario.RecEma)
	assert.Equal(t, "S", usuario.VerAtv)
	assert.Equal(t, 2, usuario.CodCli)
}

func TestDeleteUsuario(t *testing.T) {
	prepareTestDatabase()
	w, r := newTestContext("POST", "/usuarios/deletar/1", "1")
	serveHTTP(w, r)
	assert.Equal(t, http.StatusOK, w.Code)

}
