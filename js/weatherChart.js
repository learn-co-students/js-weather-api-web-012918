function getFahrenheits(result){
  // Your code goes here
  return result.hourly_forecast.map(function(f) {
    return f.temp.english;
  })
}

function getHours(result){
  // Your code goes here
  return result.hourly_forecast.map(function(hours) {
    return hours.FCTTIME.hour;
  })
}

function generateDataSet(labels, data) {
  // Your code goes here
  let ctx = document.getElementById("NYCWeatherChart").getContext("2d")
  let myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: "dunno",
        data: data,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
    }
  })
}
