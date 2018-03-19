function getFahrenheits(result){
  // Your code goes here
  return result.hourly_forecast.map(x => x.temp.english)
}

function getHours(result){
  // Your code goes here
  return result.hourly_forecast.map(x => x.FCTTIME.hour)
}

function generateDataSet(labels, data) {
  return {
    labels: labels, //getHours(result)
    datasets: [
    {
      label: "Hourly Weather for New York",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: data //getFahrenheits(result)
    }
    ]
  }
}

function makeRequest(endpoint, success) {
  fetch(endpoint)
  .then(res => res.json())
  .then(json => success(json))
}
