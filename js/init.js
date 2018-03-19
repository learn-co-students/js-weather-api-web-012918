document.addEventListener('DOMContentLoaded', function() {
  console.log("LOADED")
  var API_KEY = '7eeca4319ae4a26d';
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  var URL = CORS_WRAPPER + "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";
  var ctx = document.getElementById("NYCWeatherChart").getContext("2d")

  fetch(URL).then(res => res.json()).then(json => {
    const data = generateDataSet(getHours(json), getFahrenheits(json));
    const tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  })

  // makeRequest(URL, function(json) {
  //   const data = generateDataSet(getHours(json), getFahrenheits(json));
  //   const tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  // });
});
