$(function() {
  "use strict";
  $("#form-valor").submit(function(e) {
    var $vlritm = $("#form-valor #vlritm");
    $vlritm.val($vlritm.val().replace(",", "."));
  });
});
