function getFahrenheits(result){
  return result.hourly_forecast.map(x => x.temp.english)
}

function getHours(result){
  return result.hourly_forecast.map(x => x.FCTTIME.hour)
}

function generateDataSet(labs, d) {
  return {
        labels: labs,
        datasets: [{
            label: 'Degrees Fahrenheit',
            data: d,
        }]
      }
}

// function makeRequest(endpoint, success) {
//   fetch(endpoint, function(json){
//   })
//   .then(response => response.json())
//   .then(json => {
//     getHours(json)
//     json
//   })
// }
