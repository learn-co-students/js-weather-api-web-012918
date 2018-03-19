document.addEventListener('DOMContentLoaded', function() {
  var API_KEY = "72c8f49d1b13f0d2";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  var URL = CORS_WRAPPER + "http://api.wunderground.com/api/" + API_KEY + "/hourly/q/NY/New_York.json";


  // makeRequest(URL, function(json) {
  //   var data = generateDataSet(getHours(json), getFahrenheits(json));
  //   var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  // });


  function makeRequest(endpoint, success) {
    // Your code goes here
    fetch(endpoint)
      .then(res => res.json())
      .then(json => generateDataSet(getHours(json), getFahrenheits(json)))
  }

  makeRequest(URL)

});
