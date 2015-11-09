//Wait for the HTML to load 
//Create an array containing the Cities 
//Use javascript to populate the options
//Background change is triggered by change of event
//Change background accordingly 
//Use if/else condition to change the bg

$(document).ready (function(){
	var cities = [ "NYC", "SF", "LA", "ATX", "SYD" ];
	var citiesCount = cities.length;
	for (var i = 0; i < citiesCount; i++) {
		$('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
	}
	$( "#city-type" ).change(function() {
	  var city = this.value ; 
	  // Based on the entered value and conditions, change the background image of the body
		if (city=="NYC" ) {
			// Change the background image 
			$("body").attr("class", "nyc");
		} else if (city=="SF" ) {
			$("body").attr("class", "sf");
		} else if (city=="LA") {
			$("body").attr("class", "la");
		} else if (city=="ATX") {
			$("body").attr("class", "austin");
		} else if (city=="SYD") {
			$("body").attr("class", "sydney");
		} else {
			// Reset the value back to empty 
			$("body").attr("class", "");
		}		
	});
});