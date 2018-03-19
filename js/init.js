document.addEventListener('DOMContentLoaded', function() {
  var API_KEY = "f9db2c4b9a0ac69d";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  var URL = "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";

  function makeRequest(endpoint, success) {
    // Your code goes here
    fetch(endpoint).then(
      resp => {resp.json().then(
        data => {
          generateDataSet(getHours(data), getFahrenheits(data))
        }
      )}
    )
  }
  // makeRequest(URL, function(json) {
  //   var data = generateDataSet(getHours(json), getFahrenheits(json));
  //   var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  // });

  makeRequest(URL)
});
