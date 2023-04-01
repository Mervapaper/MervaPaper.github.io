var $ = jQuery.noConflict();

/* Script on ready
------------------------------------------------------------------------------*/
$( document ).ready( function() {
	//do jQuery stuff when DOM is ready

	// Datepicker with default local storage date as selected //
	$('input.wedding-date').datepicker({
		autohide: true,
		changeMonth: true,
    	changeYear: true,
		defaultViewDate: 'today',
	    onSelect: function () {
	        localStorage.setItem("weddingDateSelected", $(this).val());
	    }
	});

	if (localStorage.getItem("weddingDateSelected") != null) {
		$("input.wedding-date").datepicker( "option", "autohide", true );
		$("input.wedding-date").datepicker( "option", "changeMonth", true );
		$("input.wedding-date").datepicker( "option", "changeYear", true );
		$("input.wedding-date").datepicker( "option", "defaultViewDate", "today" );
	    $('input.wedding-date').datepicker("setDate", new Date(localStorage.getItem("weddingDateSelected")));
	}
	
	/* Responsive Jquery Navigation */
	$( '.hamburger' ).click( function( event ) {
		$('.menu-outer').removeClass('d-none');
		$('.mobile-search-helper').addClass('d-none');
		$('body').toggleClass('is-open');
	});

	var clickable = $( '.menu-state' ).attr( 'data-clickable' );
	$( '.mobilenav li:has(ul)' ).addClass( 'has-sub' );
	$( '.mobilenav .has-sub>a' ).after( '<em class="caret">' );
	if ( clickable == 'true' ) {
		$( '.mobilenav .has-sub>.caret' ).addClass( 'trigger-caret' );
	} else {
		$( '.mobilenav .has-sub>a' ).addClass( 'trigger-caret' ).attr( 'href','javascript:;' );
	}

	/* menu open and close on single click */
	$( '.mobilenav .has-sub>.trigger-caret' ).click( function() {
		var element = $( this ).parent( 'li' );
		if ( element.hasClass( 'is-open-submenu' ) ) {
			element.removeClass( 'is-open-submenu' );
			element.find( 'li' ).removeClass( 'is-open-submenu' );
			element.find( 'ul' ).slideUp( 200 );
		}
		else {
			element.addClass( 'is-open-submenu' );
			element.children( 'ul' ).slideDown( 200 ) ;
			element.siblings( 'li' ).children( 'ul' ).slideUp( 200 );
			element.siblings( 'li' ).removeClass( 'is-open-submenu' );
			element.siblings( 'li' ).find( 'li' ).removeClass( 'is-open-submenu' );
			element.siblings( 'li' ).find( 'ul' ).slideUp( 200 );
		}
	} );


	$("#video-popup").videoPopup({
	  	autoplay: false,
	  	showControls: true,
	  	controlsColor: null,
	  	loopVideo: false,
	  	showVideoInformations: true,
	  	width: null
	});

	// instagram feed slick slider //
	var instagram_slider = jQuery("#sbi_images");
	if(instagram_slider.length) {
		$('#sbi_images').slick({
		 	arrows: true,
	        infinite: true,
	        dots: false,
			adaptiveHeight: true,
			centerMode: true,
			centerPadding: '120px',
			rows: 0,
	        slidesToShow:  4,
	        slidesToScroll: 2,
	        responsive: [
			{
			  	breakpoint: 1199,
			    settings: {
	              	slidesToShow: 3,
					slidesToScroll: 1,
					centerPadding: '80px',
              	}
		 	},
		 	{
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
				slidesToScroll: 1,
				centerPadding: '50px',
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
				slidesToShow: 1.3,
				centerMode: false,
				infinite: false,
				centerPadding: '0px',
				slidesToScroll: 1,
				arrows: false
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});
	}

	if(jQuery('.features-section:not(.has-color) .feature-slider').length) {
		jQuery('.features-section:not(.has-color) .feature-slider').slick({
		 	arrows: false,
	        infinite: false,
	        dots: false,
			adaptiveHeight: false,
			rows: 0,
	        slidesToShow:  3,
	        slidesToScroll: 1,
	        responsive: [{
		      	breakpoint: 768,
		      	settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					adaptiveHeight: true,
					autoplay: true,
					infinite: true,
					autoplaySpeed: 5000,
					speed: 1500,
		      	}
		    }]
		});
	}

	if(jQuery('.testimonial-slider').length) {
		jQuery('.testimonial-slider').slick({
		 	arrows: false,
	        infinite: false,
	        dots: false,
	        adaptiveHeight: false,
	        slidesToShow:  4,
			slidesToScroll: 1,
			rows: 0,
			responsive: [
			{
		      	breakpoint: 1200,
		      	settings: {
					slidesToShow: 3.5,
					slidesToScroll: 1,
		      	}
			},
			{
		      	breakpoint: 992,
		      	settings: {
					slidesToShow: 2.5,
					slidesToScroll: 1,
		      	}
			},
			{
		      	breakpoint: 640,
		      	settings: {
					slidesToShow: 1.3,
					slidesToScroll: 1,
		      	}
		    }
			]
		});
	}

	top_spacing();
	top_h();
	latest_design_slider();
	upsells_products();
	related_products();

	$("a[href='#']").click(function(e) {
		e.preventDefault();
	});

	// open search
	jQuery('.search-block').on('click', function () {
		jQuery('body').addClass('open-search');
	});

	$(document).click(function(e){
		if($(e.target).closest('#search-form').length === 0 && $(e.target).closest('.search-block').length === 0){
			$('body').removeClass('open-search');
		}
	});

	// Product gallary realted //
	var stPt = 0, elToShow = 4; //showing 10 elements
	var $ul = jQuery('.gallery-thumbnails__list');
	var $li = jQuery('.gallery-thumbnails__item'); //get the list of li's
	var $copy_li = [];
	var copy_lgt = $li.length - elToShow;


	initProductGallaryNav();

	function initProductGallaryNav() {
		
		$ul.removeClass('hidden');

		var tmp;
		for (var i = elToShow; i < $li.length; i++) {
			tmp = $li.eq(i);
			$copy_li.push(tmp.clone());
			tmp.remove();
		}
	}

	jQuery('.js-next').on('click', function () {
		$li = jQuery('.gallery-thumbnails__item'); //get the list of li's
			
		//move the 1st element clone to the last position in copy_li
		$copy_li.splice(copy_lgt, 0, $li.eq(0).clone() ); //array.splice(index,howmany,element1,.....,elementX)
		
		//kill the 1st element in the UL
		$li.eq(0).remove();
		
		//add to the last
		$ul.append($copy_li.shift());
	});
	
	jQuery('.js-prev').on('click', function () {
		$li = jQuery('.gallery-thumbnails__item'); //get the list of li's
			
		//move the 1st element clone to the last position in copy_li
		$copy_li.splice(0, 0, $li.eq(elToShow-1).clone()); //array.splice(index,howmany,element1,.....,elementX)
		
		//kill the 1st element in the UL
		$li.eq(elToShow-1).remove();
		
		//add to the last
		$ul.prepend($copy_li.pop());
	});

	// Product FAQ block
	/* menu open and close on single click */
	$( '.frequent-question-item .question' ).click( function() {
		var element = $( this ).parent( 'li' );
		if ( element.hasClass( 'is-open-faq' ) ) {
			element.removeClass( 'is-open-faq' );
			element.find( 'li' ).removeClass( 'is-open-faq' );
			element.find( '.answer' ).slideUp( 400 );
		}
		else {
			element.addClass( 'is-open-faq' );
			element.children( '.answer' ).slideDown( 400 ) ;
			element.siblings( 'li' ).children( '.answer' ).slideUp( 400 );
			element.siblings( 'li' ).removeClass( 'is-open-faq' );
			element.siblings( 'li' ).find( 'li' ).removeClass( 'is-open-faq' );
			element.siblings( 'li' ).find( '.answer' ).slideUp( 400 );
		}
	});

	// load video on thumb click
	jQuery('.video-popup-section #video-block').on('click', function (e) {
		e.preventDefault();
		jQuery(this).closest('.video-popup-section').addClass('show-video');

		nowPlaying = $(this).closest('.video-banner-wrap').siblings('.video-wrapper').find('iframe').attr('src');

		$(this).closest('.video-banner-wrap').siblings('.video-wrapper').find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + "playVideo" + '","args":""}', "*");

	});

});

/* Script on scroll
------------------------------------------------------------------------------*/
$( window ).on( 'scroll',function() {
	top_spacing();
	top_h();
});

/* Script on resize
------------------------------------------------------------------------------*/
$( window ).on( 'resize',function() {
	top_h();
	latest_design_slider();
	upsells_products();
	related_products();

	if (jQuery(window).innerWidth() > 991) {
		$('body').removeClass('is-open');
		$('.mobilenav ul li').removeClass('is-open-submenu');
		$('.mobilenav li ul.sub-menu').removeAttr('style');
	}
});

/* Custom function
------------------------------------------------------------------------------*/

/* main top spacing */
function top_spacing() {
	if (jQuery(window).innerWidth() > 991) {
		if (jQuery('.site-header').length) {
			var topBar_h = jQuery('.site-header .header_sticky_text').innerHeight();
			var header_h = jQuery('.site-header .main-nav-wrapper').innerHeight();
			if (jQuery(window).scrollTop() >= topBar_h) {
				jQuery('body').addClass('sticky');
				jQuery('.site-main').css({
					paddingTop: header_h,
				});
			} else {
				jQuery('body').removeClass('sticky');
				jQuery('.site-main').removeAttr('style');
			}
		}
	} else {
		if (jQuery('.mobilenav').length) {
			var topBar_h = jQuery('.mobilenav .header_sticky_text').innerHeight();
			var header_h = jQuery('.mob-site-header').innerHeight();
			if (jQuery(window).scrollTop() >= topBar_h) {
				jQuery('body').addClass('sticky');
				jQuery('.site-main').css({
					paddingTop: header_h,
				});
			} else {
				jQuery('body').removeClass('sticky');
				jQuery('.site-main').removeAttr('style');
			}
		}
	}
}

// mobile nav top
function top_h() {
	if (jQuery(window).innerWidth() < 992) {
		var top_h;
		if (jQuery('body').hasClass('sticky')) {
			top_h = jQuery('.mob-site-header').innerHeight();
		} else {
			top_h = jQuery('.mobilenav').innerHeight();
		}

		jQuery('.mobilenav .menu-state').css({
			top: top_h,
		});
	} else {
		jQuery('.mobilenav .menu-state').removeAttr('style');
	}
}

// latest design slick slider //
var flag = false;
function latest_design_slider() {
	if(jQuery(".latest-design-slider").length) {
		if (jQuery(window).width() > 991) {
			if (!flag) {
				jQuery(".latest-design-slider").not('.slick-initialized').slick({
					dots: false,
					arrows: true,
					slidesToShow: 4.5,
					slidesToScroll: 1,
					autoplay: false,
					infinite: false,
					rows: 0,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3.5,
							},
						},
						{
							breakpoint: 992,
							settings: 'unslick',
						},
					],
				});
				flag = true;
			}
		} else {
			if (flag) {
				flag = false;
			}
		}
	}
}

// related products //
var related_flag = false;
function related_products() {
	if (jQuery(".related .products").length) {
		jQuery(".related .product-slider-wrapper").removeClass('no-slider');
		if (jQuery(window).width() > 991 && jQuery(".related .products .product-item").length > 4) {
			if (!related_flag) {
				jQuery(".related .products").not('.slick-initialized').slick({
					dots: false,
					arrows: true,
					slidesToShow: 4.5,
					slidesToScroll: 1,
					autoplay: false,
					infinite: false,
					rows: 0,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3.5,
							},
						},
						{
							breakpoint: 992,
							settings: 'unslick',
						},
					],
				});
				related_flag = true;
			}
		} else {
			jQuery(".related .product-slider-wrapper").addClass('no-slider');
			if (related_flag) {
				related_flag = false;
			}
		}
	}
}

// related products //
var upsells_flag = false;
function upsells_products() {
	if (jQuery(".up-sells .products").length) {
		jQuery(".up-sells .product-slider-wrapper").removeClass('no-slider');
		if (jQuery(window).width() > 991 && jQuery(".up-sells .products .product-item").length > 4) {
			if (!upsells_flag) {
				jQuery(".up-sells .products").not('.slick-initialized').slick({
					dots: false,
					arrows: true,
					slidesToShow: 4.5,
					slidesToScroll: 1,
					autoplay: false,
					infinite: false,
					rows: 0,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3.5,
							},
						},
						{
							breakpoint: 992,
							settings: 'unslick',
						},
					],
				});
				upsells_flag = true;
			}
		} else {
			jQuery(".up-sells .product-slider-wrapper").addClass('no-slider');
			if (upsells_flag) {
				upsells_flag = false;
			}
		}
	}
}