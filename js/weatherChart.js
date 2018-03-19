function getFahrenheits(result){
  return result["hourly_forecast"].map(info => info["FCTTIME"]["hour"])
}

function getHours(result){
  return result["hourly_forecast"].map(info => info["temp"]["english"])
}

function generateDataSet(labels, data) {
  // Your code goes here
}

function makeRequest(endpoint, success) {
  fetch(endpoint)
  .then(resp => {
    resp.json()})
    .then(json =>
      success(json)
}
