$('#grayButton').click(switchGray);
$('#whiteButton').click(switchWhite);
$('#blueButton').click(switchBlue);
$('#yellowButton').click(switchYellow);

function switchGray() {
  $('body').attr('class', 'gray');
}

function switchWhite() {
  $('body').attr('class', 'white');
}

function switchBlue() {
  $('body').attr('class', 'blue');
}

function switchYellow() {
  $('body').attr('class', 'yellow');
}
				function(){ v
$('li').click(switchBackgroundColor);
function switchBackgroundColor(){
	var buttonClassName = $(this).attr('class');
	$('body').attr('class', buttonBackgroundColor);
});


//* set or get
$(this).css('background', 'red');
$(this).css('background');

$(this).val('HiAdele');
$(this).css();

asssignment right to left
jquery find something in html and attach or do something with it

find all list items 
on each list item attah a click handler
using the thing that was clickedd this 
get the class of the thing that was clicked
get the value out of there
assign it to the button class name varieble
add a classs


.attr to get class
.css to get background



$('li').click(function(){
	var buttonClassName = $(this).attr('class');
	//var buttonClassName = 'white';
	$('body').attr('class', buttonClassName);
	// $('body').attr('class', "white")


