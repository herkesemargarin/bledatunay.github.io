jQuery(function() {
	jQuery(window).scroll(function() {
		if(jQuery(this).scrollTop() > 120) {
			jQuery('#toTop, #backtotop').fadeIn();	
		} else {
			jQuery('#toTop, #backtotop').fadeOut();
		}
	});
	
	jQuery('.toTopA').click(function() { // absolute
		jQuery('body,html').animate({scrollTop:0},400);
	});	

	jQuery('.toTopF').click(function() { //flex
		if(jQuery(window).scrollTop() > 120) {
			jQuery('body,html').animate({scrollTop:120},600); // scrollTop = Height of the top navigation + some padding
		}	
	});	

	/*jQuery('.mobToTop').click(function() {
		if ( jQuery(window).width() < 959) {
			jQuery('body,html').animate({scrollTop:0},400);
		}
	});*/
});