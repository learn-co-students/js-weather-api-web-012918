
function getFahrenheits(result){
  // console.log(result["hourly_forecast"].map(el => el["temp"]["english"]))
  return result["hourly_forecast"].map(el => el["temp"]["english"])
}

function getHours(result){
  console.log(result["hourly_forecast"].map(el => el["FCTTIME"]["hour"]))
  return result["hourly_forecast"].map(el => el["FCTTIME"]["hour"])
}


function makeRequest(endpoint, success) {
  $.ajax({
  url: endpoint,
  dataType : 'jsonp',
  success: success
  });
}





function generateDataSet(labels, data) {
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
  	}]
  }
}
