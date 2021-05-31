jQuery(document).ready(function($) {
    "use strict";

    //In-Site-Link functionality
	if ($('a').hasClass("in-site-link")){
    $('a').click(function(event){
        event.preventDefault();
        $('nav > a').removeClass('active');
        $(this).toggleClass('active');
        var link = $(this).attr('href');
        var link1 = '.'+link;
        if (!$(link1).hasClass('active')) {
            $('.content.active').animate({top: '20px', opacity: '0'}, 700, function(){
                $('.content.active').css('top','0');
                $('.content.active').css('opacity','1');
                $('.content').removeClass('active');
                $(link1).addClass('active');
            });
        }
    });
}});