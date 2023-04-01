var $ = jQuery.noConflict();

/* Script on ready
------------------------------------------------------------------------------*/
$( document ).ready( function() {
	//do jQuery stuff when DOM is ready

	// paypal checkout related //	
	$('input[name="payment_method"]').change(function() {
	    if (this.value == 'eh_paypal_express') {
	        $('#paypal-checkout-button-render').show();
	        $('#place_order').hide();
	        $('.paypal-button-color-black').hide()
	    } else {
	        $('#place_order').show();
	        $('#paypal-checkout-button-render').hide();
	    }
	});

	// Add selectd class to checkbox radio buttons //
	$('.colour-swatch-wrap').each(function(){
		var select_checkbox_radio_wrap = this;
		
		$(".radio-button-checkbox", this).change(function() {
			$(".radio-button-checkbox", select_checkbox_radio_wrap).removeClass("selected");
		    
		    if ($(this).is(':checked')){
		      	$(this).addClass("selected");
		    }
		    else {
		      	$(this).removeClass("selected");
		    }
		});
	});

	// Wax seal colour fix //
	$('input[type=radio][name=wax_seal_colour]').change(function() {
	    var wax_seal_colour_value = $(this).val();

	    if(wax_seal_colour_value == 'Not required') {
	    	$('input[type=radio][name=wax_seal_colour]').each(function(){
	    		$(this).removeClass('selected');
	    		$('#wax-seal-colour-options .colour-label').empty();
	    	});
	    }
	});

	// RSVP Envelope fix colour fix //
	$('input[type=radio][name=rsvp_envelope_colour]').change(function() {
	    var wax_seal_colour_value = $(this).val();

	    if(wax_seal_colour_value == 'Not required') {
	    	$('input[type=radio][name=rsvp_envelope_colour]').each(function(){
	    		$(this).removeClass('selected');
	    		$('#rsvp-envelope-colour-options .colour-label').empty();
	    	});
	    }
	});


	// Add selectd class to price radio buttons //
	$('.radio-button-colour-wrap').each(function(){
		var select_radio_wrap = this;
		
		$(".radio-button-price-colour", this).change(function() {
			$(".radio-button-price-colour", select_radio_wrap).removeClass("selected");
		    
		    if ($(this).is(':checked')){
		      	$(this).addClass("selected");
		    }
		    else {
		      	$(this).removeClass("selected");
		    }
		});
	});

	// Display RSVP colour swatch for USA users //
	$('input[name="rsvp_card_usa_option"]').on('change', function (e) {
	    var rsvp_usa_title = $(this).val();

	    if(rsvp_usa_title == 'Not required') {
	    	$('#rsvp-card-tab .colour-swatch-wrap.US').hide();
	    	$('#rsvp-card-tab .rsvp-card-color-wrap').removeClass('visible');

	    	$('.selected-rsvp-card-options .value').html('No');
	    	$('.selected-rsvp-card-colour .value').html('No');

	    	$('#rsvp-card-tab input[name=rsvp_card_option]').prop('checked', false);
	    	$('#rsvp-card-tab input[name=rsvp_card_option]').removeClass('selected');

	    	$('#rsvp-card-tab input[name=base_swatch]').prop('checked', false);
	    	$('#rsvp-card-tab input[name=base_swatch]').removeClass('selected');

	    	$('#rsvp-card-tab input[name=rsvp_card_colour]').prop('checked', false);

	    	$('#rsvp-card-tab input[name=base_swatch]').rules('add', {
			    required: false, 
			});

	    	$('#rsvp-card-tab input[name=rsvp_card_colour]').rules('add', {
			    required: false
			});

			price_change();
	    } else {
	    	$('#rsvp-card-tab .colour-swatch-wrap.US').show();
	    }
	});

	// Update price when checbox is changed //
	$("#persnalize-form .tab .radio-button-checkbox").change(function() {
		price_change();
   	});

   	// Update price when radio button with price  is changed //
	$("#persnalize-form .tab .radio-button-price-colour").change(function() {
		price_change();
   	});

	// update price when someone click on quantity box //
	$("#quantity-input").on('keyup change click', function () {
		price_change();
	});

	// Update price when quantity change in minus //
    $('#persnalize-form .quantity').on('click', '.quantity__minus', function(e) {
        $input = $(this).closest('#quantity-input');
        var val = parseInt($input.val());
        if (val > 0) {
            $input.val( val-1 ).change();
        } 

        price_change();
    });

	// Update price when quantity change in plus //
    $('#persnalize-form .quantity').on('click', '.quantity__plus', function(e) {
        $input = $(this).closest('#quantity-input');
        var val = parseInt($input.val());
        $input.val( val+1 ).change();

        price_change();
    });


    // price change fucntion //
    function price_change() {
    	var quantity = $("#quantity-input").val();
		var get_base_price = $("#hidden-product-data").attr('data-base-price');

		var currency = ajax_params.currancy_symbol;

		var data_extra_checkbox_price = 0;
		var data_extra_radio_price = 0;

		$('.radio-button-checkbox.selected').each(function(){
			data_extra_checkbox_price += parseFloat($(this).attr('data-extra-price'));
		});

		$('.radio-button-price-colour.selected').each(function(){
			data_extra_radio_price += parseFloat($(this).attr('data-extra-price'));
		});

		var extra_checkbox_price_to_be_add = data_extra_checkbox_price.toFixed(2);

		var extra_radio_price_to_be_add = data_extra_radio_price.toFixed(2);

		var new_base_checkbox_price = parseFloat(get_base_price) + parseFloat(extra_checkbox_price_to_be_add) + parseFloat(extra_radio_price_to_be_add);
		var formetted_new_base_checbox_price = new_base_checkbox_price.toFixed(2);

		var product_total = parseFloat(formetted_new_base_checbox_price * quantity);
		var formetted_product_total = product_total.toFixed(2);

		$("#hidden-product-data").attr('data-single-price', formetted_new_base_checbox_price);
		$("#hidden-product-data").attr('data-new-price', formetted_product_total);

		$("#product_new_price").val(formetted_new_base_checbox_price);

		var new_price = $("#hidden-product-data").attr('data-new-price');

		$('#persnalize-form .tab .total-price .woocommerce-Price-amount').html('<bdi> <span class="woocommerce-Price-currencySymbol">' + currency + '</span>' + formetted_product_total + '</bdi>');
		$('#persnalize-form .tab .invitation-price .woocommerce-Price-amount').html('<bdi> <span class="woocommerce-Price-currencySymbol">' + currency + '</span>' + formetted_new_base_checbox_price + '</bdi>');

		// run ajax to set new price and quantity in session //
		var product_id = $("#hidden-product-data").attr('data-product-id');
		var product_set_price = $("#hidden-product-data").attr('data-single-price');

		// $.ajax({
		// 	url: ajax_params.ajaxurl,
		// 	dataType: "json",
		// 	type: 'POST',
		// 	data: { 
		// 		action: 'product_option_change',
		// 		'product_set_price': product_set_price,
		// 		'product_quantity':  quantity,
		// 		'product_id': product_id
		// 	},
		// 	success: function(data) {

		// 	}
		// });
    }

    // Ajax blog filter on category term change //
    $('.blog-main .blog-listing-sort-filter .blog-category-term-item').on('click', function() {
	  	$('.blog-listing-sort-filter .blog-category-term-item').removeClass('selected');
	  	$(this).addClass('selected');

	  	var term_id = $(this).find('.blog-category-term').attr('data-term-id');
	  	var ppp = $('.blog-listing-filter-section #blog-load-more').attr('data-post-per-page');
		var page_number = $('.blog-listing-filter-section #blog-load-more').attr('data-paged');

		blog_filter(term_id, ppp, page_number, 'cat_filter');
	});

    // Ajax blog filter on load more //
	$('.blog-main .blog-listing-filter-section #blog-load-more').on('click', function () {
		var term_id = $('.blog-listing-sort-filter').find('.blog-category-term-item.selected .blog-category-term').attr('data-term-id');
		var ppp = $(this).attr('data-post-per-page');
		var page_number = $(this).attr('data-paged');

		blog_filter(term_id, ppp, page_number, 'load_more');
	});

    // Ajax blog filter function //
	function blog_filter(term_id, ppp, page_number, type) {
		if(type == 'cat_filter') {
			var pageNumber = 1;
		} else {
			var pageNumber = parseInt(page_number) + 1;
		}

		$.ajax({
			url: ajax_params.ajaxurl,
			dataType: "json",
			type: 'POST',
			data: { 
				'action': 'blog_filter',
				'term_id': term_id,
				'ppp' : ppp,
				'offset': pageNumber,
			},
			beforeSend: function(data) {
				$(document).find('.ajax-loading').fadeIn('slow');
			},
			success: function(data) {
				$(document).find('.ajax-loading').fadeOut('slow');

				if (data.response) {

					$('.blog-error-wrap').html('');

					if(type == 'load_more') {
						$('.blog-listing-filter-section #blog-load-more').attr('data-paged', pageNumber);
	                    $('.blog-listing-filter-section .blog-items .blog-items-main').append(data.html);
					} else if (type == 'cat_filter') {
						$('.blog-listing-filter-section #blog-load-more').attr('data-paged', 1);
						$('.blog-listing-filter-section .blog-items .blog-items-main').html('');
						$('.blog-listing-filter-section .blog-items .blog-items-main').html(data.html);
					}
                    
                    $('#blog-load-more').removeClass('d-none');
                
                } else {
                	$('.blog-listing-filter-section #blog-load-more').attr('data-paged', 1);

                	if(type == 'load_more') {
	                    $('.blog-listing-filter-section .blog-error-wrap').html(data.html);
						console.log('aaa');
					} else if (type == 'cat_filter') {
						console.log('bbb');
						$('.blog-listing-filter-section .blog-items .blog-items-main').html('');
						 $('.blog-listing-filter-section .blog-error-wrap').html(data.html);
					}
                    
                    $('#blog-load-more').addClass('d-none');
                }
			}
		});
	}

	function delay(callback, ms) {
        var timer = 0;
        
        return function() {
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                callback.apply(context, args);
            }, ms || 0);
        };
	}

	$(document).click(function(e) {
		if($(e.target).closest('.blog-listing-sort-filter .blog-search-item-list').length === 0 && $(e.target).closest('.blog-listing-sort-filter .blog-term-search-wrap').length === 0){
			$('.blog-listing-sort-filter .blog-search-wrap').removeClass('list-show');
		}
	});

	$('.blog-listing-sort-filter .blog-term-search-text').on('click', function (e) {
		$('.blog-listing-sort-filter .blog-search-wrap').addClass('list-show');
	});


	// Blog searchbox input type //
	$('.blog-term-search-icon').on('click',function(e){
		var blog_text_search = $('.blog-term-search-text').val();

        if (blog_text_search.length <= 3) {
        	$('.blog-search-wrap').html('');
        	$('.blog-search-wrap').html('<div class="error">Please enter more then 3 words</div>');
        } else {

        	$.ajax({
				url: ajax_params.ajaxurl,
				dataType: "json",
				type: 'POST',
				data: { 
					'action': 'blog_search_filter',
					'search_text': blog_text_search,
				},
				beforeSend: function(data) {
					$(document).find('.ajax-loading').fadeIn('slow');
				},
				success: function(data) {
					$(document).find('.ajax-loading').fadeOut('slow');

					if (data.response) {
	                	$('.blog-search-wrap').html('');
						$('.blog-search-wrap').html(data.html).addClass('list-show');
	                } else {
	                	$('.blog-search-wrap').html('');
        				$('.blog-search-wrap').html(data.html);
	                }
				}
			});
        }
	});

	// Delay function //
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

 	// Cart sidebar quanity change //
	$(document).on('keyup','.cart-quantity-field', debounce(function () {
    	var $this = $(this);
        var $quantity = parseFloat($(this).val());
        var $new_quantity = $quantity;
        var $min_quantity = parseFloat($this.closest('.product-quantity').attr('data-min-quantity'));
        var $origional_quantity_value = parseFloat($(this).attr('data-val'));

        if($new_quantity <= $min_quantity) {
        	alert('Mimunim Product Quantity is  ' + $min_quantity);
        	$(this).val($origional_quantity_value);

        	return false;
        }

        var item_hash = $(this).attr( 'name' ).replace(/cart\[([\w]+)\]\[qty\]/g, "$1");
        var item_quantity = $this.val();
        var currentVal = parseFloat(item_quantity);

        qty_cart(item_hash, currentVal);
	}, 2000));

	// Qunatity increase decrease //
 	$(document).on('click','.td-quantity-button',function () {
	
        var $this = $(this);
        var $input = $this.parent().find('input');
        var $quantity = $input.val();
        var $new_quantity = 0;
        var $min_quantity = $this.closest('.product-quantity').attr('data-min-quantity');

        if ($this.hasClass('plus')) {
            var $new_quantity = parseFloat($quantity) + 1;
        } else {
            if ($quantity > 0) {
                var $new_quantity = parseFloat($quantity) - 1;
            }
        }
        
        if($new_quantity <= $min_quantity) {
        	alert('Mimunim Product Quantity is  ' + $min_quantity);
        	return false;
        }

        $input.val($new_quantity);
        
        var item_hash = $input.attr( 'name' ).replace(/cart\[([\w]+)\]\[qty\]/g, "$1");
        var item_quantity = $input.val();
        var currentVal = parseFloat(item_quantity);

        qty_cart(item_hash, currentVal);
    });

 	// Remove product from cart //
 	$(document).on('click','.cart-model-wrap .remove-product',function(){
 		var $this = $(this);
        var $input = $this.closest('.cart_item').find('.input-text');

 		var item_hash = $input.attr( 'name' ).replace(/cart\[([\w]+)\]\[qty\]/g, "$1");
 		var currentVal = 0;

 		qty_cart(item_hash, currentVal);
 	});


 	// Ajax function //
  	function qty_cart(item_hash, currentVal) {
        $.ajax({
            url: ajax_params.ajaxurl,
            type: 'POST',
            data: {
                action: 'qty_cart',
                hash: item_hash,
                quantity: currentVal
            },
            beforeSend: function(xhr) {
				$(document).find('.ajax-loading').fadeIn('slow');
			},
			success: function(data) {
				$(document).find('.ajax-loading').fadeOut('slow');
				var result = jQuery.parseJSON( data );

				if( result.success == 1 ){
					$( '.mini-cart-item' ).html( result['data'] );
					$( '.mini-cart-bottom-wrapper .total-mini-cart .total-price' ).html( result['total'] );
					$( '.cart-menu-item span.count' ).html( result['total_qty'] );
				} else {
					$( '.mini-cart-item' ).html( result['data'] );
				}
            }
        });
    }


	// Shop by color dropdown change event //    
    $(".shop-by-colour-section #colour").on('change', function(e) {
		var colour = $(this).val();
		var style = $(".shop-by-colour-section #style").val();
		var shape = $(".shop-by-colour-section #shape").val();
		
		shop_by_color(colour, style, shape);
	});

	$(".shop-by-colour-section #style").on('change', function(e) {
    	var colour = $(".shop-by-colour-section #colour").val();
		var style = $(this).val();
		var shape = $(".shop-by-colour-section #shape").val();
		
		shop_by_color(colour, style, shape);
	});

	$(".shop-by-colour-section #shape").on('change', function(e) {
    	var colour = $(".shop-by-colour-section #colour").val();
		var style = $(".shop-by-colour-section #style").val();
		var shape = $(this).val();
		
		shop_by_color(colour, style, shape);
	});

	// Shop by color ajax function //
	function shop_by_color(colour, style, shape) {

		var post_per_page = $('.shop-by-colour-products .product_filter_hidden').attr('data-no-of-posts');
		var category_slug = $('.shop-by-colour-products .product_filter_hidden').attr('data-category-slug');
		var taxonomy_id = $('.shop-by-colour-products .product_filter_hidden').attr('data-taxonomy-id');
		var parent_taxonomy_id = $('.shop-by-colour-products .product_filter_hidden').attr('data-parent-taxonomy-id');

		$.ajax({
            url: ajax_params.ajaxurl,
            type: 'POST',
            dataType: "json",
            data: {
            	action: 'shop_by_colour',
                colour: colour,
                style: style,
                shape: shape,
                post_per_page: post_per_page,
                category_slug: category_slug,
                taxonomy_id : taxonomy_id,
                parent_taxonomy_id: parent_taxonomy_id
            },
            beforeSend: function(xhr) {
				$(document).find('.ajax-loading').fadeIn('slow');
			},
			success: function(data) {
				$(document).find('.ajax-loading').fadeOut('slow');
				$(".product_filter_hidden").attr('data-paged', parseInt(2));
				
				if( data.response ){ 
					$('.shop-by-colour-products .products-wrap').html( data.html );
					$('#load_more_posts_ajax').show();
				} else {
					$('.shop-by-colour-products .products-wrap').html( data.html );
				}
            }
        });
	}

	// Runs ajax on load more id scroll //
	$('#load_more_posts_ajax').on('inview', function (event, visible) {
	  	if (visible == true) {
	   		var colour = $(".shop-by-colour-section #colour").val();
			var style = $(".shop-by-colour-section #style").val();
			var shape = $(".shop-by-colour-section #shape").val();

			var post_per_page = $('.shop-by-colour-products .product_filter_hidden').attr('data-no-of-posts');
			var category_slug = $('.shop-by-colour-products .product_filter_hidden').attr('data-category-slug');
			var taxonomy_id = $('.shop-by-colour-products .product_filter_hidden').attr('data-taxonomy-id');
			var parent_taxonomy_id = $('.shop-by-colour-products .product_filter_hidden').attr('data-parent-taxonomy-id');

			var data_paged = $('.shop-by-colour-products .product_filter_hidden').attr('data-paged');
			
			$.ajax({
	            url: ajax_params.ajaxurl,
	            type: 'POST',
	            dataType: "json",
	            data: {
	            	action: 'shop_by_colour',
	                colour: colour,
	                style: style,
	                shape: shape,
	                post_per_page: post_per_page,
	                category_slug: category_slug,
	                taxonomy_id : taxonomy_id,
	                parent_taxonomy_id: parent_taxonomy_id,
	                paged: data_paged
	            },
	            beforeSend: function(xhr) {
					$(document).find('.ajax-loading').fadeIn('slow');
				},
				success: function(data) {
					$(document).find('.ajax-loading').fadeOut('slow');
					$('.product-category-shop-section').remove();
					$('.product-category-cta-products').remove();
					
					if( data.response ){ 
						$('.shop-by-colour-products .products-wrap').append( data.html );
						$(".product_filter_hidden").attr('data-paged', parseInt(data_paged) + 1);
					} else {
						$('.product_filter_hidden').attr('data-paged', parseInt(2));
						$('#load_more_posts_ajax').hide();
					}
	            }
	        });
	   	}
	});

	// ajax add to cart //
	$(".add-to-cart-ajax").click(function(e){ 
	    e.preventDefault();

	    var form_valid = $("#persnalize-form").valid();

	    if(!form_valid){
	    	e.preventDefault();
	    	return false;
	    }

	    if($('input[name="repeat_order"]').is(':checked')){
	    	var repeat_order = 'Yes';
	    } else {
	    	var repeat_order = 'No';
	    }

	    var card_colour = $('.selected-card-colour .value').html();
	    var pocketfold_colour = $('.selected-pocketfold-colour .value').html();
	    var laser_cut_colour = $('.selected-laser-cut-colour .value').html();
	    var base_colour = $('.selected-base-colour .value').html();
	    var insert_colour = $('.selected-insert-colour .value').html();
	    var foil_colour = $('.selected-foil-colour .value').html();
	    
	    var envelope_colour = $('.selected-envelope-colour .value').html();
	    var ribbon_colour = $('.selected-ribbon-colour .value').html();
	    var ribbon_select_option = $('.selected-ribbon-options .value').html();

	    var glitter_colour = $('.selected-glitter-colour .value').html();
	    var glitter_select_option = $('.selected-glitter-options .value').html();
	    var wax_seal_colour = $('.selected-wax-seal-colour .value').html();
	    
	    var information_card_option = $('.selected-information-card-options .value').html();
	    var information_card_colour = $('.selected-information-card-colour .value').html();
	    var rsvp_card_usa_option = $('.selected-rsvp-card-usa-options .value').html();
	    var rsvp_card_option = $('.selected-rsvp-card-options .value').html();
	    var rsvp_card_colour = $('.selected-rsvp-card-colour .value').html();
	    var rsvp_envelope_colour = $('.selected-rsvp-envelope-colour .value').html();
	    
	    var belly_band_with_colour_option = $('.selected-belly-band-with-colour-options .value').html();
	    var belly_band_with_colour = $('.selected-belly-band-with-colour .value').html();
	    var belly_band = $('.selected-belly-band .value').html();
	    var vellum_jacket = $('.selected-vellum-jacket-options .value').html();
	    var evelope_liner = $('.selected-evelope-liner .value').html();
	    var address_label = $('.selected-address-label .value').html();
	    var envelope_seal = $('.selected-evelope-seal .value').html();
	    var diy = $('.selected-diy .value').html();

	    var product_id = $(this).attr('data-product-id');
	    var quantity = $("#quantity-input").val();
		var product_price =  $('#product_new_price').val();

		var wedding_date = $('.wedding_date_personalise').val();

	    $.ajax({
            url: ajax_params.ajaxurl,
            type: 'POST',
            data: {
        	 	'action': 'ajax_add_to_cart',
        	 	'repeat_order': repeat_order,
        	 	'card_colour': card_colour,
        	 	'pocketfold_colour': pocketfold_colour,
        	 	'laser_cut_colour': laser_cut_colour,
        	 	'base_colour': base_colour,
        	 	'insert_colour': insert_colour,
        	 	'foil_colour': foil_colour,
        	 	'envelope_colour': envelope_colour,
        	 	'ribbon_colour': ribbon_colour,
        	 	'ribbon_select_option': ribbon_select_option,
        	 	'glitter_colour': glitter_colour,
        	 	'glitter_select_option': glitter_select_option,
        	 	'wax_seal_colour': wax_seal_colour,
        	 	'information_card_option': information_card_option,
        	 	'information_card_colour': information_card_colour,
        	 	'vellum_jacket': vellum_jacket,
        	 	'rsvp_card_usa_option': rsvp_card_usa_option,
        	 	'rsvp_card_option': rsvp_card_option,
        	 	'rsvp_card_colour': rsvp_card_colour,
        	 	'rsvp_envelope_colour': rsvp_envelope_colour,
        	 	'belly_band_with_colour_option': belly_band_with_colour_option,
        	 	'belly_band_with_colour': belly_band_with_colour,
        	 	'belly_band': belly_band,
        	 	'evelope_liner': evelope_liner,
        	 	'address_label': address_label,
        	 	'envelope_seal': envelope_seal,
        	 	'diy': diy,
        	 	'wedding_date': wedding_date,
	            'product_id': product_id,
	            'quantity': quantity,
	            'product_price': product_price,
            },
            beforeSend: function(xhr) {
				$(document).find('.ajax-loading').fadeIn('slow');
			},
			success: function(response) {
				$(document).find('.ajax-loading').fadeOut('slow');
				
				if( response.error != 'undefined' && response.error ){
		            return true;
		       	} else {
		       		// success //
		            // location.href = ajax_params.checkout_url;
		            // location.href = location.href;
					location.reload();
		        }
            }
	    });
  });

});

/* Script on scroll
------------------------------------------------------------------------------*/
$( window ).on( 'scroll',function() {
});

/* Script on resize
------------------------------------------------------------------------------*/
$( window ).on( 'resize',function() {
});

/* Custom function
------------------------------------------------------------------------------*/