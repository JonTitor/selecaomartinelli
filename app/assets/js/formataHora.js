function pad(str, tamanho, caracter) {
  str = "" + str;
  while (str.length < tamanho) {
    str = caracter + str;
  }
  return str;
}

function formataHoraDeDecimal(seg) {
  var str = "";

  hora = Math.floor(seg / 60.0 / 60.0);
  str += pad(hora, 2, "0");

  minuto = Math.floor(seg / 60.0);
  while (minuto >= 60) {
    minuto -= 60;
  }
  str += ":" + pad(minuto, 2, "0");

  seg = Math.floor(seg);
  while (seg >= 60) {
    seg -= 60;
  }
  str += ":" + pad(seg, 2, "0");

  return str;
}
