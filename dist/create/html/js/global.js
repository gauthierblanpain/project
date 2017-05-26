(function($) {
    "use strict"; // Start of use strict

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });
	
    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
           top: 100
        }
    });
	
	// Initialize Owl Carousel
	$('.carousel').owlCarousel({
		loop:true,
		responsiveClass:true,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1,
				nav:false,
				dots:true
			},
			550:{
				items:2,
				nav:false,
				dots:true
			},
			992:{
				items:3,
				nav:false,
				dots:true
			},
			1200:{
				items:4,
				nav:false,
				dots:true
			}
		}
	});
	
	// Initialize Bootstrap Tooltips
	$('[data-toggle="tooltip"]').tooltip()

})(jQuery); // End of use strict
