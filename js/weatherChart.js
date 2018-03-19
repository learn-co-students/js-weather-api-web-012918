function getFahrenheits(result){
  // Your code goes here
  return result.hourly_forecast.map(function(x) {
    console.log(x['temp']["english"])
    return x['temp']["english"]
  })
}

function getHours(result){
  // Your code goes here
  return result.hourly_forecast.map(function(x) {
    console.log(x['FCTTIME']['hour'])
    return x['FCTTIME']['hour']
  })
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

// function getWeather(){
//  fetch(URL)
//  .then(res => res.json())
//  .then(json => {
//    generateDataSet(getHours(json),getFahrenheits(json))
//  })
// }
//
// window.addEventListener('DOMContentLoaded', getWeather)
