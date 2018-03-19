// document.addEventListener("DOMContentLoaded", makeRequest)

function getFahrenheits(result){
  // Your code goes here
  return result.hourly_forecast.map(function(hour){
    return hour.temp.english
  })

}

function getHours(result){
  // Your code goes here
  return result.hourly_forecast.map(function(hour){
    return hour.FCTTIME.hour
  })
}

function generateDataSet(labels, data) {
  // Your code goes here
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

// function makeAjaxRequest(endpoint, success){
//   return fetch(endpoint)
//   .then(resp => {return resp.json()})
//   .then(resp => {return success(resp)})
// }

function makeAjaxRequest(endpoint, success) {
  $.ajax({ url : endpoint, dataType : "jsonp", success: success})
}
