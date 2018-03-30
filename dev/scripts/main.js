'use strict';

const ohHey = "Hello World";

console.log(ohHey);

$(document).ready(function () {
	$('#hamburger').click(function () {
		$('#hamburger').addClass('open');
		$('.headerNav__menu').toggleClass('show');
	});
	$('.open ').click(function () {
		$('#hamburger').removeClass('open');
		$('.headerNav__menu').toggleClass('show');
	});
	$('.headerNav__menu--link').click(function () {
		$('.headerNav__menu').removeClass('show');
	});

	$('.main-carousel').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true
	});

 // new WOW().init();

	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]').not('[href="#0"]').click(function(event) {
	    // On-page links
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      if (target.length) {
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1500, function() {
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { 
	            return false;
	          } else {
	            $target.attr('tabindex', '-1'); 
	            // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });
});