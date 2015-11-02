$(document).ready (function(){

//a user hands us a number. function makes a number out of it and we hand it to the currency funtion . converts it and gives it back
	//Variable to capture current total
	var total = 0;

	//Listen for the user to submit a new price
	$('#entry').submit(sumTotalAndNewEntry);

	function sumTotalAndNewEntry(event){
		event.preventDefault();

		//Get the value from the input field newEntry
		//ingredients
		var entryNew = $('#newEntry')
			.val(); // value to what ever the user input
		//Convert the value to a number incase it has random text
		var entryNewNum = parseFloat(
			entryNew); 
			// creates a new variable called entrynewnum to convert into number
		var entryNewCurrency = currencyFormat(entryNewNum); // assign currency to  the number the cusomer put
		console.log('entryNewCurrencyValue: ' + entryNewCurrency);
		
		//creates a placeholder for total currency
		var totalCurrency;

		//updating the current total
		total = total + entryNewNum;

//assigning currency to total and storing it for later
		totalCurrency = currencyFormat(total);
		console.log('totalCurrency: ' + totalCurrency);
		
//finding the id entries in the HTML and creating a new table row with the value
		$('#entries').append('<tr><td>' + entryNewCurrency+'</td></tr>');

//updating the text in id total changing it to the dollarsign
	$('#total').text(totalCurrency);

}
//make me a number to the dollar sign to what ever the user imput
//number to convert is the number the user imputs

	function currencyFormat(numberToConvert){
		//numberToConvert will be whatever number is passed to the function in parenthesis, this will either be the number a user inputs or the total
//take the number that was passed to the currency format function and make sure that it has 2 decimal places
		var currency = numberToConvert.toFixed(2);

		//Adding a dollar sign to the decimal we just created. This will convert the number to a string.
		var currencyWithDollar = '$' + currency;
		//Gives the final currency
		return currencywithDollar

	}


});