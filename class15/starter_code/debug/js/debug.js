$(document).ready (function(){

$("body").append("<h1>Hi world!</h1>");

var pies=["Cherry","Pumpkin","Banana","Rhubarb"];

$("body").append("There are "+pies.length+" total pies.<br>");

pies.forEach(function(element,index){
	console.log(element);
	if (element === "Cherry") {
	
		$("body").append(index+1+") "+element+": Yum!<br>");
	
	} else if (element === "Rhubarb") {
	
		$("body").append(index+1+") "+element+": Yuck<br>");
	
	} else if (element === "Banana" || element === "Pumpkin") {
	
		$("body").append(index+1+") "+element+": meh<br>");

	}
























var hot = 75;
var cold = 40;



   if (tempInFNum > hot) {
      $('body').css({'background-color': 'red', 'color': 'white'});

    } else if (tempInFNum < cold || tempInFNum >40) {
      $('body').css('background-color', 'blue', 'white' + 'color', 'white', 'black');
   }











});
});
