function getFahrenheits(result){
  // Your code goes here
  // console.log(result.hourly_forecast.map(hour=> hour.temp.english))
  return result.hourly_forecast.map(function (hour) {return hour.temp.english})
}

function getHours(result){
  // Your code goes here
  // console.log(result.hourly_forecast.map(hour=> hour.FCTTIME.hour))
  return result.hourly_forecast.map(function (hour) {return hour.FCTTIME.hour})
}

function generateDataSet(labels, data) {
  // Your code goes here
  // let dataSet = labels.map((label, i)=>{return {[label]: data[i]}})
  // console.log(dataSet)

  // return {
  //   labels: labels,
  //   datasets: [{
  //     data: data
  //   }]
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
}

}

function makeAjaxRequest(endpoint, success) {
//   // Your code goes here
$.ajax({ url : endpoint, dataType : "jsonp", success: success})  //??? i don't know ajax calls
  // return fetch(endpoint, {
  //
  // }).then(function(resp) {return resp.json()}).then(function(resp)){return success(resp)})//.then(json=>getFahrenheits(json))
}
//
//
//
// // makeRequest("https://cors-anywhere.herokuapp.com/http://api.wunderground.com/api/19ab6da8c1f34049/hourly/q/NY/New_York.json", function(json) {
// //     var data = generateDataSet(getHours(json), getFahrenheits(json));
// //     var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
// //   });
// //   console.log(result.hourly_forecast.map(hour=>{return {[hour.FCTTIME.hour]: hour.temp.english}}))
