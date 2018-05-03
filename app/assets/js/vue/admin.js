(function() {
  "use strict";

  var el = document.getElementById("tela-admin");
  if (!el) {
    return;
  }

  new Vue({
    el: el,
    delimiters: ["${", "}"],

    data: {
      apagarImagemTelaInicial: false,
      apagarImagemMarcaDagua: false
    },

    methods: {
      enviarEmailTeste: function(event) {
        event.preventDefault();

        var $this = $(event.target);
        $this.attr("disabled", "disabled");
        $.ajax({
          url: "/api/enviar-email-teste",
          data: {
            token: $this.data("token"),
            ativo: Base64.encode($("#smtp\\.ativo").val()),
            host: Base64.encode($("#smtp\\.host").val()),
            porta: Base64.encode($("#smtp\\.portaSMTP").val()),
            email: Base64.encode($("#smtp\\.email").val()),
            senha: Base64.encode($("#smtp\\.senha").val()),
            emailteste: Base64.encode($("#smtp\\.emailteste").val()),
            ssl: Base64.encode($("#smtp\\.ssl").val())
          },
          success: function(data) {
            $this.removeAttr("disabled");
            Modal.open({ content: "<p>" + data.mensagem + "</p>" });
          }
        }).fail(function(data) {
          $this.removeAttr("disabled");
          Modal.open({
            content: "<p>Não foi possível enviar o e-mail teste</p>"
          });
        });
      },

      verificarConexaoPostgreSQL: function(event) {
        event.preventDefault();

        var $this = $(event.target);
        $this.attr("disabled", "disabled");

        $.ajax({
          url: "/api/verificar-conexao",
          data: {
            token: $this.data("token"),
            servidor: Base64.encode($("#banco\\.servidor").val()),
            porta: Base64.encode($("#banco\\.porta").val()),
            usuario: Base64.encode($("#banco\\.usuario").val()),
            senha: Base64.encode($("#banco\\.senha").val()),
            banco: Base64.encode($("#banco\\.banco").val()),
            sslmode: Base64.encode($("#banco\\.sslmode").val())
          },
          success: function(data) {
            $this.removeAttr("disabled");
            Modal.open({ content: "<p>" + data.mensagem + "</p>" });
          }
        }).fail(function(data) {
          $this.removeAttr("disabled");
          Modal.open({
            content: "<p>Não foi possível verificar a conexão</p>"
          });
        });
      },

      verificarAtualizacao: function(event) {
        event.preventDefault();

        var $this = $(event.target);
        $this.attr("disabled", "disabled");

        $.ajax({
          url: "/api/verificar-atualizacao",

          success: function(data) {
            $this.removeAttr("disabled");
            Modal.open({
              content:
                "<p>" +
                data.mensagem +
                "</p>" +
                "<p>  Versão Instalada: " +
                data.versao +
                "</p>" +
                "<p>Versão no Servidor: " +
                data.versaoFTP +
                "</p>" +
                '<a href="' +
                data.link +
                '"><span class="icon fa fa-download">Baixar</span></a>'
            });
          }
        }).fail(function(data) {
          $this.removeAttr("disabled");
          Modal.open({
            content:
              "<p>Não foi possível verificar se existe atualização</p>" +
              data.mensagem
          });
        });
      },

      autoAtualizacao: function(event) {
        event.preventDefault();

        var $this = $(event.target);
        $this.attr("disabled", "disabled");

        $this.removeAttr("disabled");
        Modal.open({
          content: "<p>Atualização sendo instalada....</p>"
        });
        $.ajax({
          url: "/api/autoatualizacao",

          success: function(data) {
            $this.removeAttr("disabled");
            Modal.open({
              content: "<p>" + data.mensagem + "</p>"
            });
          }
        }).fail(function(data) {
          $this.removeAttr("disabled");
          Modal.open({
            content: "<p>Erro na atualização:" + data.mensagem + "</p>"
          });
        });
      },

      reiniciarServico: function(event) {
        event.preventDefault();

        var $this = $(event.target);
        $this.attr("disabled", "disabled");
        $.ajax({
          url: "/api/reiniciarServico",

          success: function(data) {
            $this.removeAttr("disabled");
            Modal.open({
              content: "<p>" + data.mensagem + "</p>"
            });
          }
        }).fail(function(data) {
          $this.removeAttr("disabled");
          Modal.open({
            content: "<p>Erro na atualização:" + data.mensagem + "</p>"
          });
        });
      }
    }
  });
})();
