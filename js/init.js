document.addEventListener('DOMContentLoaded', function() {
  var API_KEY = "8cd97c107d1e0717";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  var URL = CORS_WRAPPER + "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = document.getElementById("NYCWeatherChart").getContext("2d")


  // makeRequest(URL, function(json) {
  //   var data = generateDataSet(getHours(json), getFahrenheits(json));
  //   var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  // });

  // function getWeather(){
  //   fetch(URL)
  //   .then(res => res.json())
  //   .then(json => {
  //     generateDataSet(getHours(json),getFahrenheits(json))
  //   })
  // }





});
