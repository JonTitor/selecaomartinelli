(function() {
    "use strict";
  
    var el = document.getElementById("comparativo-grafico");
    if (!el) {
      return;
    }
  
    new Vue({
      el: el,
      delimiters: ["${", "}"],
  
      data: {
        etapas: JSON.parse(el.getAttribute("data-etapas")),
        valores: JSON.parse(el.getAttribute("data-valores")),
        usu: JSON.parse(el.getAttribute("data-usu")),
        usucomp: JSON.parse(el.getAttribute("data-usucomp")),
        valorescomp: JSON.parse(el.getAttribute("data-valorescomp")),
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
                  label: self.usu,
                  borderColor:'#b21e1e',
                  pointBackgroundColor:'#471b1b',
                  pointbordercolor:'#b21e1e',
                  data: self.valores,
                },
                {
                    label: self.usucomp,
                    borderColor:'#545452',
                    pointBackgroundColor:'#000000',
                    pointbordercolor:'#545452',
                    data: self.valorescomp,
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
  