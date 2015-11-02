
// Use the .ready to wait for the HTML to load
$(document).ready (function(){
	// alert("test");
	// Create the onclick trigger function 
	$( "#submit-btn" ).click(function() {
		// Prevent the default action 
		event.preventDefault();
		// Save the entered value on the city variable 
		// Trim the value to remove trailing space 
		var city = $("#city-type").val().trim();
		// Compare the entered value using the if / elseif condition 
		// Makesure to consider the multiple city names 
		// Based on the entered value and conditions, change the background image of the body
		if (city=="New York" || city=="New York City" || city=="NYC" ) {
			// Change the background image 
			$("body").attr("class", "nyc");
			// Reset the value back to empty 
			$("#city-type").val('');
		} else if (city=="San Francisco" || city=="Bay Area" || city=="SF" ) {
			$("body").attr("class", "sf");
			// Reset the value back to empty 
			$("#city-type").val('');
		} else if (city=="Los Angeles" || city=="LA" || city=="LAX" ) {
			$("body").attr("class", "la");
			// Reset the value back to empty 
			$("#city-type").val('');
		} else if (city=="Austin" || city=="ATX") {
			$("body").attr("class", "austin");
			// Reset the value back to empty 
			$("#city-type").val('');
		} else if (city=="Sydney" || city=="SYD") {
			$("body").attr("class", "sydney");
			// Reset the value back to empty 
			$("#city-type").val('');
		} else {
			// Reset the value back to empty 
			$("#city-type").val('');
		}		
	});
});