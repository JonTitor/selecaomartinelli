(function() {
  "use strict";

  VueMarkdown.install(Vue);
  Vue.component("click-confirm", window["click-confirm"]);

  $("form[data-confirm]").submit(function(e) {
    var $form = $(this),
      msg = $form.data("confirm") || "Deseja continuar?";

    if (!confirm(msg)) {
      e.preventDefault();
    }
  });

  // envia form ao mudar valor
  $("select[data-submit-on-change]").change(function(e) {
    e.target.form.submit();
  });
})();
