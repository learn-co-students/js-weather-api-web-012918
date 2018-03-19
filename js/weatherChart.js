function getFahrenheits(result){
  let hourly = result.hourly_forecast
  return hourly.map((hour) => {
    return parseInt(hour.temp.english)
  });
}

function getHours(result){
  let hourly = result.hourly_forecast
  return hourly.map((hour) => {
    return parseInt(hour.FCTTIME.hour)
  });
}

function generateDataSet(labels, data) {
  let ctx = document.getElementById("NYCWeatherChart");
  let myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: labels
          ,
          datasets: [{
              label: 'Hourly Temperature',
              data: data,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)'

              ],
              borderColor: [
                  'rgba(255,99,132,1)'
              ],
              borderWidth: 1
          }]
      }
      ,
      options: {
        title: {
            display: true,
            text: 'NYC Hourly Weather'
        },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
}


var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";

function getWeather(){
  fetch(URL)
  .then(res => res.json())
  .then(json => {
    generateDataSet(getHours(json),getFahrenheits(json))
  })
}

window.addEventListener('DOMContentLoaded', getWeather)
