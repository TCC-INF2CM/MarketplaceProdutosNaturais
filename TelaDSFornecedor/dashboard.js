<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

function drawStuff() {

    var chartDiv = document.getElementById('chart_div');

    var data = google.visualization.arrayToDataTable([
      ['Meses', 'Vendas', 'Devoluções'],
      ['Janeiro','8000 ' ,'80'],
      ['Fevereiro','' ,''],
      ['Março','1500' ,'500'],
      ['Abril','' ,''],
      ['Maio','' ,''],
      ['Junho','' ,''],
      ['Julho','' ,''],
      ['Agosto','' ,''],
      ['Setembro','' ,''],
      ['Outubro','' ,''],
      ['Novembro','' ,''],
      ['Dezembro','' ,'1']
     
    ]);

    var materialOptions = {
      width: 900,
      chart: {
        title: 'Vendas do ano',
        subtitle: 'Valores de Vendas durante Janeiro à Dezembro'
      },
      series: {
        0: { axis: 'Venda' }, // Bind series 0 to an axis named 'distance'.
        1: { axis: 'Devoluções' } // Bind series 1 to an axis named 'brightness'.
      },
      axes: {
        y: {
          Venda: {label: 'Vendas'}, // Left y-axis.
          Devoluções: {side: 'right', label: 'Devoluções'} // Right y-axis.
        },
      }
    };
    function drawMaterialChart() {
      var materialChart = new google.charts.Bar(chartDiv);
      materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
    }
    drawMaterialChart();
};