$(document).ready(function(){
    //Variable to capture the current total
    var total = 0;

    //Listen for the user to submit a new price
    $('#entry').submit(sumTotalAndNewEntry);

    function sumTotalAndNewEntry(event){
        event.preventDefault();
        //Get the value from the input field newEntry
        var entryNew = $('#newEntry').val();
        console.log('entryNew value: ' + entryNew);
        
        //Convert the value to a number
        var entryNewNum = parseFloat(entryNew);
        console.log('entryNewNum value: ' + entryNewNum);
        
        //Change the number of the new entry into currency
        var entryNewCurrency = currencyFormat(entryNewNum);
        console.log('entryNewCurrency value: ' + entryNewCurrency);

        //Creates a placeholder for total currency
        var totalCurrency;
        
        // updating the current total
        total = total + entryNewNum;

        //Turning the total into a currency and storing it for later
        totalCurrency = currencyFormat(total);
        console.log('totalCurrency: ' + totalCurrency);

        //Finding the ID entries in the HTML and creating a new table row with the value of the input as a currency.
        $('#entries').append('<tr><td>'+entryNewCurrency+'</td></tr>');
        //Finding the ID total in the HTML and updating the text to the value of the total as a currency.
        $('#total').text(totalCurrency);

    }

    function currencyFormat(numberToConvert){
        //numberToConvert will be whatever number is passed to the function in parenthesis. This will either be the number a user inputs or the total.

        //Take the number that was passed to the currencyFormat function and make sure that it has two decimal places
        var currency = numberToConvert.toFixed(2);

        //Adding a dollar sign to the decimal number we just created. This will convert the number to a string.
        var currencyWithDollar = '$' + currency;

        //Gives the final currency with a dollar sign
        return currencyWithDollar;
    }
});

