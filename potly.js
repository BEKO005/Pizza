google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
// Set Data
const data = google.visualization.arrayToDataTable([
  ['Price', 'Size'],
  [2020,4.4],[2021,3.9],[2022,5.1],[2023,6]
  ]);
// Set Options
const options = {
  title: 'BEKO`s Pizza`s Income through years',
  hAxis: {title: 'Years'},
  vAxis: {title: 'Income in millions $'},
  legend: 'none'
};
// Draw Chart
const chart = new google.visualization.LineChart(document.getElementById('myChart'));
chart.draw(data, options);
}

