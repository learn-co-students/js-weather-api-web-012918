function getFahrenheits(result){
  // Your code goes here
  let tempArr = []
  let hourlyForecast = result["hourly_forecast"]
  for (const hour of hourlyForecast) {
    tempArr.push(hour['temp']['english'])
  }
  return tempArr
}

function getHours(result){
  // Your code goes here
  let hoursArr = []
  let hourlyForecast = result["hourly_forecast"]
  for (const hour of hourlyForecast) {
    hoursArr.push(hour['FCTTIME']['hour'])
  }
  return hoursArr
}

function generateDataSet(labels, data) {
  // Your code goes here
  // return {
  //   labels: labels,
  //   dataset: [
  //     // information
  //   ]
  // }
  return {
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
  };
}

function makeRequest(endpoint, success) {
  // Your code goes here
  fetch(endpoint)
    .then(res => res.json())
    //.then(json => console.log(json))
    .then(json => success(json))
}
