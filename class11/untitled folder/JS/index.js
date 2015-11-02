$(document).ready (function(){
	//Storing the total value

	var total = 0;

	//Set up my listeners to check for button clicks and then do math


	$('#zero').click(setTotalToZero);
	$('#add5').click(addFive);
	$('#add10').click(addTen);
	$('#sub1').click(subOne);

	function setTotalToZero(){
		total = 0;
		$('#result').text(total);
	}

	function addFive(){
		total = total + 5;
		$('#result').text(total);
	}
	function addTen(){
		total = total + 10;
		$('#result').text(total);
	}

	function subOne(){
		total = total - 1;
		$('#result').text(total);
	}

});