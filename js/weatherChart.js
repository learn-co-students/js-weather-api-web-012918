function getFahrenheits(result){
  const degrees = result.hourly_forecast.map(hour => parseInt(hour.temp.english))
  return degrees
}

function getHours(result){
  const hours = result.hourly_forecast.map(hour => parseInt(hour.FCTTIME.hour))
  return hours
}

function generateDataSet(labels, data) {
  let weatherData = {
    labels: labels,
    datasets: [{
      label: "Weather Data",
      data: data
    }]
  }
  return weatherData
}



// data: {
//       labels: ["January", "February", "March", "April", "May", "June", "July"],
//       datasets: [{
//           label: "My First dataset",
//           backgroundColor: 'rgb(255, 99, 132)',
//           borderColor: 'rgb(255, 99, 132)',
//           data: [0, 10, 5, 2, 20, 30, 45],
//       }]
