jQuery(document).ready(function(){
	
	jQuery('#nav-button').click(function() {
			jQuery('#options').toggle();
	});
	
	if ( jQuery(window).width() < 729.5) {
	jQuery('#options li a').click(function() {
			jQuery('#options').hide();
		});
	}
	
	jQuery(window).resize(function() {
		if ( jQuery(window).width() < 729.5) {
			jQuery('#options').hide();
			jQuery('#options li a').click(function() {
				jQuery('#options').hide();
			});
		}
	});
	
	jQuery(window).resize(function() {
		if ( jQuery(window).width() > 729.5) {
			jQuery('#options').show();
			jQuery('#options li a').click(function() {
				jQuery('#options').show();
			});
		}
	});
	
});	
	