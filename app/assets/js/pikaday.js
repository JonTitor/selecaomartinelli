function AtualizaPikaday(c) {
  "use strict";
  var PIKADAY_I18N = {
    previousMonth: "Mês anterior",
    nextMonth: "Próximo mês",
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ],
    weekdays: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado"
    ],
    weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
  };
  var piks = [];
  $(c).each(function(i, e) {
    var $e = $(e);
    var pik = new Pikaday({
      format: $e.data("format") || "DD/MM/YYYY HH:mm",
      field: e,
      i18n: PIKADAY_I18N,
      showTime: !$e.is("[data-disable-time]"),
      showMinutes: !$e.is("[data-disable-minutes]"),
      timeLabel: $e.attr("data-time-label") || null,
      yearRange: 100,
      use24hour: true,
      incrementMinuteBy: 15,
      autoClose: false,
      minDate: $e.is("[data-apartir-de-agora]")
        ? moment()
            .millisecond(0)
            .second(0)
            .minute(0)
            .hour(0)
            .toDate()
        : null,
      onSelect: $e.is("[data-proximo-ao-selecionar]")
        ? function() {
            $.emulateTab();
            setTimeout(function() {
              pik.hide();
            }, 100);
          }
        : null
    });
    $e.focus(function(e) {
      e.target.oldvalue = e.target.value;
    });
    $e.change(function(e) {
      if (!$e.is("[data-fechar-ao-selecionar-hora]")) {
        return;
      }

      var oldVal = moment(e.target.oldvalue, "DD/MM/YYYY HH:mm:ss");
      var newVal = moment(e.target.value, "DD/MM/YYYY HH:mm:ss");

      if (
        !isNaN(oldVal.minute()) &&
        oldVal.minute() !== newVal.minute() &&
        newVal.minute() > 0
      ) {
        setTimeout(function() {
          $.emulateTab();
          pik.hide();
        }, 100);
      }

      e.target.oldvalue = e.target.value;
    });

    piks.push(pik);
  });
  return piks;
}

AtualizaPikaday(".pikaday");
