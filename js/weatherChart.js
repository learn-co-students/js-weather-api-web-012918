function getFahrenheits(result) {
  // Your code goes here
  return result.hourly_forecast.map(function(x) {
    return x.temp.english;
  });
}

function getHours(result) {
  // Your code goes here
  return result.hourly_forecast.map(function(x) {
    return x.FCTTIME.hour;
  });
}

function generateDataSet(labels, data) {
  // Your code goes here
  let myChart = {
    labels: labels,
    datasets: [
     {
       label: "Hourly Weather for New York",
       fillColor: "rgba(220,220,220,0.2)",
       strokeColor: "rgba(220,220,220,1)",
       pointColor: "rgba(220,220,220,1)",
       pointStrokeColor: "#fff",
       pointHighlightFill: "#fff",
       pointHighlightStroke: "rgba(220,220,220,1)",
       data: data
     }
    ]
  }
  return myChart;
}

function makeRequest(endpoint, success) {
  // Your code goes here
  fetch(endpoint)
    .then(res => res.json()) // => { some data from the api }
    // => { degrees: 100,
//          location:  New York}
    .then(json => success(json));
}
