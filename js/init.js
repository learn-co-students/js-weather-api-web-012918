document.addEventListener('DOMContentLoaded', function() {
  var API_KEY = "";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  var URL = CORS_WRAPPER + "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = document.getElementById("NYCWeatherChart").getContext("2d")

  fetch(URL, function(json){
  })
  .then(response => response.json())
  .then(json => {
    var data = generateDataSet(getHours(json), getFahrenheits(json));
    var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  })
});
