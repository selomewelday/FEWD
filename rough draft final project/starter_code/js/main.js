$(document).ready (function(){
	$( ".jquery-date-picker" ).datepicker({
    showButtonPanel: true,
    dateFormat: "mm/dd/yy",
    beforeShow: function(){    
           $(".ui-datepicker").css('font-size', 12) 
    }
});


	$('#arrow').click(function(){
		scrollToAnchor('.branding');

	});

	$('#aboutLink').click(function(){
		event.preventDefault();
		scrollToAnchor('#about');
	});
		// Show paragraph on read more
	$('.readmore').click(showParagraph);

	function showParagraph() {
		$('#show-this-on-click.hide').slideDown();
		$('.readmore').hide();
		$('.readless').show();
	}

	// Hide paragraph on read less
	$('.readless').click(hideParagraph);

	function hideParagraph() {
		$('#show-this-on-click.hide').slideUp();
		$('.readmore').show();
		$('.readless').hide();
	}

	// Show span on read more
	$('.learnmore').click(showSpan);

	function showSpan() {
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	}


	function scrollToAnchor(aid){
    	var scrollTarget = $(aid);
    $('html,body').animate({scrollTop: scrollTarget.offset().top},'slow');
}	
});