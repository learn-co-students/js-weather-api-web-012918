function getFahrenheits(result){
  return result.hourly_forecast.map(function(by_hour_forecast){
    return by_hour_forecast.temp.english;
  });
}

function getHours(result){
  return result.hourly_forecast.map(function(by_hour_forecast){
    return by_hour_forecast.FCTTIME.hour;
  });
}

function generateDataSet(labels, data) {
  return {
    labels: labels,
    datasets: [
      {
        label: 'Hourly Weather for New York',
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: data
      }
    ]
  };  
}

function makeRequest(endpoint, success) {
  fetch(endpoint)
    .then(res => res.json())
    .then(json => success(json))
}
