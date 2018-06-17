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
                data: [10, 2,10,3,5]
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
