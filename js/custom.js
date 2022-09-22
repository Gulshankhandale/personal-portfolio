/*=========

Author Name: Gulshan Khandale

=========*/

/*=========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Loader Js
3.WoW Animation Js
4.Sticky Header JS
5.Portfolio One JS
6.Testimonial One JS
7.Pricing Switch JS
=========*/

$(document).ready(function($) {

	// Whole Script Strict Mode Syntax
	"use strict";

	// Loader JS Start
	$(window).ready(function(){
		$('.loader-box-one, .loader-box-two').fadeOut();
		$('body').removeClass('fixed');
   });
	// Loader JS End

	// Wow Animation JS Start
	new WOW().init(); 
	// Wow Animation JS End

    // Sticky Header JS Start
	$(window).on( 'scroll', function(){
		if ($(window).scrollTop() >= 100) {
		  $('.site-header').addClass('sticky-header');
		 }
		 else {
		  $('.site-header').removeClass('sticky-header');
		 }
	});
	// Sticky Header JS End

	// Toogle Menu Mobile JS Start
	$(".toggle-button").on('click', function() {
        $(".main-navigation").toggleClass('toggle-menu');
        $(".header-menu .black-shadow").fadeToggle();
    });
    $(".main-navigation ul li a").on('click', function() {
        $(".main-navigation").removeClass('toggle-menu');
        $(".header-menu .black-shadow").fadeOut();
    });
    $(".main-navigation ul li.sub-items>a").on('click', function() {
        $(".main-navigation").addClass('toggle-menu');
        $(".header-menu .black-shadow").stop();
    });
    $(".header-menu .black-shadow").on('click', function() {
        $(this).fadeOut();
        $(".main-navigation").removeClass('toggle-menu');
    });
    // Toogle Menu Mobile JS End

    // Portfolio One JS Start
    var swiper = new Swiper(".portfolio-slider-one", {
        slidesPerView: 4,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1920: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        }
    });
    // Portfolio One JS End

    // Testimonial One JS Start
    var swiper = new Swiper(".testimonial-slider-one", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        fade: 'true',
        centerSlide: 'true',
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 25,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1920: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        }
    });
    // Testimonial One JS End

    // Testimonial Two JS Start
    var swiper = new Swiper(".testimonial-slider-two", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        fade: 'true',
        centerSlide: 'true',
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 25,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
    // Testimonial Two JS End

    // My clients Two JS Start
    var swiper = new Swiper(".my-client-slider-two", {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        fade: 'true',
        centerSlide: 'true',
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
            1920: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        }
    });
    // My clients Two JS End

if ($(window).width() < 992) {
    // Submenu For Mobile JS Start
    $('body').on('click', '.main-navigation ul li.sub-items>a', function() {
        if (($(this).parent().hasClass('active-sub-menu'))) {
        $(this).parent().removeClass('active-sub-menu');
        $(this).parent().find('ul').slideUp();
        } else {
            $(this).parent().addClass('active-sub-menu');
            $(this).parent().find('ul').slideDown();
        }
    });
    // Submenu For Mobile JS End	
}
   
});