$(document).ready(function() {
	// main
 	$("#owl-main").owlCarousel({
		loop: true,
	    responsiveClass: true, 
	    autoplay: true,
        autoHeight: true,
        navText: [
		    "<span class='nav-icon left'><i class='fa fa-angle-left'></i></span>",
		    "<span class='nav-icon right'><i class='fa fa-angle-right'></i></span>"
		    ],
	    responsive:{
	        0:{
	            items:1,
	            nav: true,
	            dots: true
	        },
	        600:{
	            items:1,
	           	nav: true,
	            dots: true
	        },
	        1000:{
	            items:1,
	            nav: true,
	            dots: true
	        },
	        1200:{
	        	items:1,
	        	nav: true,
	            dots: true
	        }
	    }
	});
	$("#owl-brand").owlCarousel({
		loop: true,
	    responsiveClass: true, 
	    // autoplay: true,
        autoHeight: true,
        navText: [
		    "<span class='nav-icon-brand left'><i class='fa fa-angle-left'></i></span>",
		    "<span class='nav-icon-brand right'><i class='fa fa-angle-right'></i></span>"
		    ],
	    responsive:{
	        0:{
	            items:2,
	            nav: true,
	            dots: false,
	        },
	        600:{
	            items:2,
	           	nav: true,
	            dots: false
	        },
	        1000:{
	            items:5,
	            nav: true,
	            dots: false
	        },
	        1200:{
	        	items:5,
	        	nav: true,
	            dots: false
	        }
	    }
    });
});