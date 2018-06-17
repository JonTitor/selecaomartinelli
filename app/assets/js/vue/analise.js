(function() {
  "use strict";

  var el = document.getElementById("analise-grafico");
  if (!el) {
    return;
  }

  new Vue({
    el: el,
    delimiters: ["${", "}"],

    data: {
      etapas: JSON.parse(el.getAttribute("data-etapas")),
      valores: JSON.parse(el.getAttribute("data-valores")),
    },
    created: function() {
      var self = this;
      Vue.component('line-chart', {
        extends: VueChartJs.Radar,
        mounted () {
          this.renderChart({
            labels: self.etapas,
            datasets: [
              {
                label: 'Nota',
                backgroundColor: '#f87979',
                data: self.valores
              }
            ]
          }, {responsive: true, maintainAspectRatio: false})
        }
      })
    },

    methods: {
    },
  });
})();
