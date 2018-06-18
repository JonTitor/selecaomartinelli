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
          this.renderChart(
            {
            labels: self.etapas,
            datasets: [
              {
                label: 'Nota',
                borderColor:'#b21e1e',
                pointBackgroundColor:'#471b1b',
                pointbordercolor:'#b21e1e',
                data: self.valores,
              },
            ],
          },
           {                     
            responsive: true, 
            maintainAspectRatio: false,
            scale: {
              ticks: {
                min: 0,
                max: 10
              } 
            },           
          },      
        
        )
        }
      })
    },

    methods: {
    },
  });
})();
