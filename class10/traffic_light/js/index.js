//Implement the red light using jQuery. Don't forget to add the script tags.
$(document).ready (function(){

//applies to all//
	function clearLights(){
		$('.bulb').css('background-color', 'black');
	}
//aaaaaaaaaaaaaaaaaaaa//

//red//

	$('#stopButton').click(illuminateStopLightRed)


	function illuminateStopLightRed() {
		clearLights();
		$('#stopLight').css('backgroundColor', 'red');
	}
//yellow//	

	$('#slowButton').click(illuminateStopLightYellow)


	function illuminateStopLightYellow() {
		clearLights();
		$('#slowLight').css('backgroundColor', 'yellow');
	}

//green//

	$('#goButton').click(illuminateStopLightGreen)


	function illuminateStopLightGreen() {
		clearLights();
		$('#goLight').css('backgroundColor', 'green');
	}
});

