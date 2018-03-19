document.addEventListener('DOMContentLoaded', function() {
  var API_KEY = "412baf65f0c025e0";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = document.getElementById("NYCWeatherChart").getContext("2d")

  makeAjaxRequest(URL, function(json) {
    var data = generateDataSet(getHours(json), getFahrenheits(json));
    var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  });
});
