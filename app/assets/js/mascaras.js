(function() {
  "use strict";

  var MASCARAS = {
    cpf: [
      /\d/,
      /\d/,
      /\d/,
      ".",
      /\d/,
      /\d/,
      ".",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/
    ],
    cnpj: [
      /\d/,
      /\d/,
      ".",
      /\d/,
      /\d/,
      /\d/,
      ".",
      /\d/,
      /\d/,
      /\d/,
      "/",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/
    ],
    "dia-mes-ano": [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/],
    "dia-mes-ano-hora": [
      /\d/,
      /\d/,
      "/",
      /\d/,
      /\d/,
      "/",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      " ",
      /\d/,
      /\d/,
      ":",
      /\d/,
      /\d/
    ],
    hora: [/\d/, /\d/, ":", /\d/, /\d/]
  };

  var elementos = document.querySelectorAll("input[data-mask]");

  for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i],
      dataMask = elemento.getAttribute("data-mask");

    aplicaMascara(dataMask, elemento);
  }

  function aplicaMascara(maskName, el) {
    var mask = MASCARAS[maskName];

    if (!mask) {
      console.warn(sprintf('Máscara "%s" não reconhecida', dataMask));
      return;
    }

    vanillaTextMask.maskInput({
      inputElement: el,
      mask: mask,
      guide: true
    });
  }

  window.aplicaMascara = aplicaMascara;
})();
