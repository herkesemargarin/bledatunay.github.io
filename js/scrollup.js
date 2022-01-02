jQuery(function() {
	jQuery(window).scroll(function() {
		if(jQuery(this).scrollTop() > 120) {
			jQuery('#toTop, #backtotop').fadeIn();	
		} else {
			jQuery('#toTop, #backtotop').fadeOut();
		}
	});
	jQuery('.toTop').click(function() {
		jQuery('body,html').animate({scrollTop:0},400);
	});	

	jQuery('.toTopDet').click(function() {
		jQuery('body,html').animate({scrollTop:120},800); // scrollTop = Height of the top navigation + some padding
	});	

	jQuery('.mobToTop').click(function() {
		if ( jQuery(window).width() < 959) {
			jQuery('body,html').animate({scrollTop:0},400);
		}
	});	

	jQuery('.mobToTopDet').click(function() {
		if ( jQuery(window).width() < 959) {
			jQuery('body,html').animate({scrollTop:120},800);
		}
	});	
});