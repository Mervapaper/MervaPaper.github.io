
var $ = jQuery.noConflict();

/* Script on ready
------------------------------------------------------------------------------*/
$( document ).ready( function() {
	//do jQuery stuff when DOM is ready


	///////////////////////////////// Set product option in add to cart step when page load ///////////////////////
	var information_card_option = $('input[name="information_card_option"]:checked').val();
	if(information_card_option){
		$('.selected-information-card-options').addClass('show');
		$('.selected-information-card-options').html('<div class="title">Information Card Options: </div><div class="value">' + information_card_option + '</div>');
	}

	var rsvp_card_usa_option = $('input[name="rsvp_card_usa_option"]:checked').val();
	if(rsvp_card_usa_option){
		$('.selected-rsvp-card-usa-options').addClass('show');
		$('.selected-rsvp-card-usa-options').html('<div class="title">Rsvp Card: </div><div class="value">' + rsvp_card_usa_option + '</div>');
	}

	var rsvp_card_option = $('input[name="rsvp_card_option"]:checked').val();
	if(rsvp_card_option){
		$('.selected-rsvp-card-options').addClass('show');
		$('.selected-rsvp-card-options').html('<div class="title">Rsvp Card Options: </div><div class="value">' + rsvp_card_option + '</div>');
	}

	var rsvp_envelope_colour_options = $('input[name="rsvp_envelope_colour"]:checked').val();
	if(rsvp_envelope_colour_options){
		$('.selected-rsvp-envelope-colour').addClass('show');
		$('.selected-rsvp-envelope-colour').html('<div class="title">Rsvp Envelope Options: </div><div class="value">' + rsvp_envelope_colour_options + '</div>');
	}

	var wax_seal_colour_options = $('input[name="wax_seal_colour"]:checked').val();
	if(wax_seal_colour_options){
		$('.selected-wax-seal-colour').addClass('show');
		$('.selected-wax-seal-colour').html('<div class="title">Wax Seal Color: </div><div class="value">' + wax_seal_colour_options + '</div>');
	}

	var belly_band_with_colour_options = $('input[name="belly_band_with_colour_option"]:checked').val();
	if(belly_band_with_colour_options){
		$('.selected-belly-band-with-colour-options').addClass('show');
		$('.selected-belly-band-with-colour-options').html('<div class="title">Belly Band With Colour Options: </div><div class="value">' + belly_band_with_colour_options + '</div>');
	}

	var envelope_seal = $('input[name="envelope_seal"]:checked').val();		
	if(envelope_seal) {
		$('.selected-evelope-seal').addClass('show');
		$('.selected-evelope-seal').html('<div class="title">Envelope Seal: </div><div class="value">' + envelope_seal + '</div>');
	}

	var vellum_jacket = $('input[name="vellum_jacket"]:checked').val();
	if(vellum_jacket){
		$('.selected-vellum-jacket-options').addClass('show');
		$('.selected-vellum-jacket-options').html('<div class="title">Vellum Jacket Options: </div><div class="value">' + vellum_jacket + '</div>');
	};

	var belly_band = $('input[name="belly_band"]:checked').val();
	if(belly_band){
		$('.selected-belly-band').addClass('show');
		$('.selected-belly-band').html('<div class="title">Belly Band: </div><div class="value">' + belly_band + '</div>');
	}

	var envelope_colour = $('input[name="envelope_colour"]:checked').val();
	if(envelope_colour){
		$('.selected-envelope-colour').addClass('show');
		$('.selected-envelope-colour').html('<div class="title">Envelope Colour: </div><div class="value">' + envelope_colour + '</div>');
	}

	var evelope_liner = $('input[name="evelope_liner"]:checked').val();
	if(evelope_liner){
		$('.selected-evelope-liner').addClass('show');
		$('.selected-evelope-liner').html('<div class="title">Envelope Liner: </div><div class="value">' + evelope_liner + '</div>');
	}

	var address_label = $('input[name="address_label"]:checked').val();
	if(address_label){
		$('.selected-address-label').addClass('show');
		$('.selected-address-label').html('<div class="title">Address Label: </div><div class="value">' + address_label + '</div>');
	}

	var diy = $('input[name="diy"]:checked').val();
	if(diy){
		$('.selected-diy').addClass('show');
		$('.selected-diy').html('<div class="title">DIY: </div><div class="value">' + diy + '</div>');
	}

	// personialze form validation and multistpe
	var min_quantity = $('#hidden-product-data').attr('data-min-qauntity');

	if(min_quantity) {
		var set_min_quantity = parseInt(min_quantity);
	} else {
		var set_min_quantity = parseInt(1);
	}

	var repeat_order_get_value = $('.repeat-order-checkbox').attr('data-repeat-min-quantity');
	var repeat_order_quantity = parseInt(repeat_order_get_value);
	
	var val	= {
	    // Specify validation rules
	    rules: {
	    	colour_swatch : "required",
	      	card_colour: "required",
	      	pocketfold_colour: "required",
	      	laser_cut_colour: "required",
	      	base_colour: "required",
	      	insert_colour: "required",
	      	foil_colour: "required",
	      	glitter_select_option: "required",
	      	glitter_colour: "required",
	      	information_card_option: "required",
	      	rsvp_card_option: "required",
	      	rsvp_envelope_colour: "required",
	      	vellum_jacket: "required",
	      	ribbon_colour: "required",
	      	belly_band_with_colour_option: "required",
	      	belly_band: "required",
	      	wax_seal_colour: "required",
	      	wedding_date: "required",
	      	envelope_colour: "required",
	      	evelope_liner: "required",
	      	envelope_seal: "required",
	      	address_label: "required",
	      	diy: "required",
	      	quantity: {
	      		required: true,
	      		min: function () {
                	return $("#repeat_order:checked").length ? repeat_order_quantity : set_min_quantity;
                },
	      		max: 1000,
	    	},
	    },
	    // Specify validation error messages
	    messages: {
	    	colour_swatch: "Card Swatch is required in order to select card colour",
			card_colour: "Card Color is required",
			pocketfold_colour: "Pocketfold Color is required",
			laser_cut_colour: "Laser Cut Colour is required",
			base_colour: "Base Colour is required",
			insert_colour: "Insert Colour is required",
			glitter_select_option: "Glitter option is required",
			glitter_colour: "Glitter Colour is required",
			foil_colour: "Foil color is required",
			information_card_option: "Information card option is required",
			rsvp_card_option: "RSVP Card option is required",
			rsvp_envelope_colour: "RSVP envelope colour is required",
			vellum_jacket: "Vellum jacket is required",
			ribbon_colour: "Ribbon colour is required",
			belly_band_with_colour_option: "Belly band with colour option is required",
			belly_band: "Belly band is required",
			wax_seal_colour: "Wax seal colour is required",
			envelope_colour: "Envelope colour is required",
			evelope_liner: "Evelope liner is required",
			envelope_seal: "Envelope seal is required",
			address_label: "Address label is required",
			diy: "DIY is required",
			wedding_date: "Wedding date is required"
	    },
	    errorElement : 'div',
	    errorLabelContainer: '.personalise-error'
	}

	// persnalize form validation with multistep //
	$("#persnalize-form").multiStepForm({
		validations:val,
	}).navigateTo(0);


	// sample order form validation //
    var sample_color_limit = 3;
	$('#sample-order-form').validate({
	    rules: {
            'sample_colour[]': {
                required: true,
                maxlength: sample_color_limit
            },
            wedding_date: "required",
        },
        messages: {
            'sample_colour[]': {
                required: "Sample Color is required",
                maxlength: "Only {0} colours is allowed"
            },
            wedding_date: "Wedding date is required"
        },
	    errorElement : 'div',
	    errorLabelContainer: '.sample-error'
    });

	// Limit sample order to select upto 3 color only //
	$('#sample-card-colour input[type=checkbox]').on('change', function (e) {
	    if ($('#sample-card-colour input[type=checkbox]:checked').length > sample_color_limit) {
	        $(this).prop('checked', false);
	        alert("Only "+ sample_color_limit + " colours is allowed");
	    } else {
			var sample_checkbox_length = $("#sample-card-colour input[type=checkbox]:checked").length;
	  		
	  		var checkedVals = $('#sample-card-colour input[type=checkbox]:checked').map(function() {

	  			if(sample_checkbox_length == 1) {
	  				var sample_checkbox = this.value;
	  			} else {
	  				var sample_checkbox = '<div>'+this.value+'</div>';
	  			}

			    return sample_checkbox;
			}).get();
			
			$("#sample-card-colour .colour-label").html(checkedVals);
	    }
	});

	////////////////////////////////// Display card colour steps conditioanlly /////////////////////////////////////
	// Display infomration card colour only if information card option is selectd expect not required //
	$('input[name="information_card_option"]').on('change', function (e) {
	    var information_card_value = $(this).val();

	    if(information_card_value == 'Not required') {
	    	$("#information-card-tab .information-card-color-wrap").removeClass('visible');
	    	$('#information-card-colour-options .colour-label').empty();
	    	$("input[name=information_card_colour]").removeAttr("checked");
	    	$('.selected-information-card-colour').empty();
	    } else {
	    	$("#information-card-tab .information-card-color-wrap").addClass('visible');

	    	// Dynamic add jquery rules //
	    	$('input[name=information_card_colour_swatch]').rules('add', {
			    required: true, 
			    messages: {
			        required: "Information colour swatch is required to select information card colour.",
			    }
			});

	    	$('input[name=information_card_colour]').rules('add', {  // <- a single field with custom messages
			    required: true, 
			    messages: {
			        required: "Information Card Color is required",
			    }
			});
	    }
	});


	// Display rsvp card colour only if rsvp card option is selectd expect not required //
	$('input[name="rsvp_card_option"]').on('change', function (e) {
	    var rsvp_value = $(this).val();

	    if(rsvp_value == 'Not required') {
	    	$("#rsvp-card-tab .rsvp-card-color-wrap").removeClass('visible');
	    	$('#rsvp-card-colour-options .colour-label').empty();
	    	$("input[name=rsvp_card_colour]").removeAttr("checked");
	    	$('.selected-rsvp-card-colour').empty();
	    } else {
	    	$("#rsvp-card-tab .rsvp-card-color-wrap").addClass('visible');

	    	// Dynamic add jquery rules //
	    	$('input[name=base_swatch]').rules('add', {
			    required: true, 
			    messages: {
			        required: "RSVP Color swatch is required to select rsvp card colour.",
			    }
			});

	    	$('input[name=rsvp_card_colour]').rules('add', {  // <- a single field with custom messages
			    required: true, 
			    messages: {
			        required: "RSVP Card Color is required",
			    }
			});
	    }
	});

	// Display belly band with colour only if rsvp card option is selectd expect not required //
	$('input[name="belly_band_with_colour_option"]').on('change', function (e) {
	    var belly_band_with_color_value = $(this).val();

	    if(belly_band_with_color_value == 'Not Required') {
	    	$("#belly-band-with-color-tab .belly-band-with-color-colour-wrap").removeClass('visible');
	    	$('#belly-band-with-colour-options .colour-label').empty();
	    	$("input[name=belly_band_with_colour]").removeAttr("checked");
	    	$('.selected-belly-band-with-colour').empty();
	    } else {
	    	$("#belly-band-with-color-tab .belly-band-with-color-colour-wrap").addClass('visible');

	    	// Dynamic add jquery rules //
	    	$('input[name=belly_band_with_colour_swatch]').rules('add', {
			    required: true, 
			    messages: {
			        required: "Belly band color swatch is required to select belly band colour",
			    }
			});

	    	$('input[name=belly_band_with_colour]').rules('add', {
			    required: true, 
			    messages: {
			        required: "Belly band color is required",
			    }
			});
	    }
	});

	// close personalize poup on close button click event //
	$(".close-personalise").on("click", function() {
		$(".close-modal").trigger("click");
	});

	counter();

	// Add loading class to btn //
	$("#persnalize-form").submit(function (e) {

		if($("#persnalize-form .wedding-date").val() == ""){
			alert('Please Select Wedding Date');
			e.preventDefault();
		} else {
			var min_quantity = $('#hidden-product-data').attr('data-min-qauntity');
			var actual_quantity = $('#quantity-input').val();

			if(actual_quantity <= min_quantity) {
				// Do nothing 
			} else {
				$('#persnalize-form .single_add_to_cart_button').addClass('loading');
			}
		}
	});

	// adjust steps tab bottom padding
	$('.single-product .navigation-button-wrap button').on('click', function () {
		setTimeout(function () {
			var element_h = $('.single-product .tab.current .tabs-footer-wrap').innerHeight() + 30;
			$('.single-product #personalise-modal').css({
				paddingBottom: element_h,
			});
		},200);
	});

	// custom select
	$(".custom-dropdown").each(function() {
        var _this = $(this);
        var jQuerypl = _this.attr("data-placeholder");
        _this.select2({
            dropdownParent: _this.closest("div"),
			placeholder: jQuerypl,
			minimumResultsForSearch: Infinity,
        });
    });

	// custom multi select
	$("#pa_color.custom-dropdown").each(function() {
        var _this = $(this);
        var jQuerypl = _this.attr("data-placeholder");
        _this.select2({
            dropdownParent: _this.closest("div"),
			placeholder: jQuerypl,
			minimumResultsForSearch: Infinity,
			templateSelection: formatState,
        });
    });

    // open cart sidebar //
    $('.cart-menu-item').click(function() {
		openNav('.cart-model-wrap');
	});

	$(".closebtn").click(function(e) {
		$(this).closest('.sidebar').removeClass('show');
		$('.background-overlay').removeClass('show');
		$('body').removeClass('open-sidebar');
	});

	$(document).on('click', function (event) {
		if (!$(event.target).closest('.list-with-side').length > 0 && !$(event.target).closest('.product-information-wrap').length > 0 && !$(event.target).closest('.delivery-return-wrap').length > 0 && !$(event.target).closest('.category-list-wrap-mobile').length > 0 && !$(event.target).closest('.cart-menu-item').length > 0 ) {
  		  	if(!$(event.target).closest('.sidebar.show').length > 0) {
	  		  	if ($('.background-overlay.show').length > 0) {
				 	$('.sidebar').removeClass('show');
					$('.background-overlay').removeClass('show');
					$('body').removeClass('open-sidebar');
	  		  	}
  		  	}
	  	}
	});

	function openNav(data) {
		$(data).addClass('show');
		$('body').addClass('open-sidebar');
		$('.background-overlay').addClass('show');
	}

	smooth_scroll_div();


	////////////////////////////////////// display selected option in last summary step //////////////////////////////////
	$('#card-colour-options .radio-button-colour').on('change', function (e) {
		$('.selected-card-colour').addClass('show');
		$('.selected-card-colour').html('<div class="title">Card Colour: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('#pocketfold-colour-options .radio-button-colour').on('change', function (e) {
		$('.selected-pocketfold-colour').addClass('show');
		$('.selected-pocketfold-colour').html('<div class="title">Pocketfold Colour: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('#laser-cut-colour-options .radio-button-colour').on('change', function (e) {
		$('.selected-laser-cut-colour').addClass('show');
		$('.selected-laser-cut-colour').html('<div class="title">Laser Cut Colour: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('#base-colour-options .radio-button-colour').on('change', function (e) {
		$('.selected-base-colour').addClass('show');
		$('.selected-base-colour').html('<div class="title">Base Colour: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('#insert-colour-options .radio-button-colour').on('change', function (e) {
		$('.selected-insert-colour').addClass('show');
		$('.selected-insert-colour').html('<div class="title">Insert Colour: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('input[name="glitter_select_option"]').on('change', function (e) {
		$('.selected-glitter-options').addClass('show');
		$('.selected-glitter-options').html('<div class="title">Glitter Options: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('#glitter-colour-options .radio-button-colour').on('change', function (e) {
		$('.selected-glitter-colour').addClass('show');
		$('.selected-glitter-colour').html('<div class="title">Glitter Colour: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('input[name="foil_colour"]').on('change', function (e) {
		$('.selected-foil-colour').addClass('show');
		$('.selected-foil-colour').html('<div class="title">Foil Options: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('input[name="information_card_option"]').on('change', function (e) {
		$('.selected-information-card-options').addClass('show');
		$('.selected-information-card-options').html('<div class="title">Information Card Options: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('#information-card-colour-options .radio-button-colour').on('change', function (e) {
		$('.selected-information-card-colour').addClass('show');
		$('.selected-information-card-colour').html('<div class="title">Information Card Colour: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('input[name="rsvp_card_usa_option"]').on('change', function (e) {
		$('.selected-rsvp-card-usa-options').addClass('show');
		$('.selected-rsvp-card-usa-options').html('<div class="title">Rsvp Card: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('input[name="rsvp_card_option"]').on('change', function (e) {
		$('.selected-rsvp-card-options').addClass('show');
		$('.selected-rsvp-card-options').html('<div class="title">Rsvp Card Options: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('#rsvp-card-colour-options .radio-button-colour').on('change', function (e) {
		$('.selected-rsvp-card-colour').addClass('show');
		$('.selected-rsvp-card-colour').html('<div class="title">Rsvp Card Colour: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('input[name="rsvp_envelope_colour"]').on('change', function (e) {
		$('.selected-rsvp-envelope-colour').addClass('show');
		$('.selected-rsvp-envelope-colour').html('<div class="title">Rsvp Envelope Colour: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('input[name="vellum_jacket"]').on('change', function (e) {
		$('.selected-vellum-jacket-options').addClass('show');
		$('.selected-vellum-jacket-options').html('<div class="title">Vellum Jacket Options: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('#ribbon-colour-options .radio-button-colour').on('change', function (e) {
		$('.selected-ribbon-colour').addClass('show');
		$('.selected-ribbon-colour').html('<div class="title">Ribbon Colour: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('input[name="ribbon_select_option"]').on('change', function (e) {
		$('.selected-ribbon-options').addClass('show');
		$('.selected-ribbon-options').html('<div class="title">Ribbon Options: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('input[name="belly_band_with_colour_option"]').on('change', function (e) {
		$('.selected-belly-band-with-colour-options').addClass('show');
		$('.selected-belly-band-with-colour-options').html('<div class="title">Belly Band With Colour Options: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('#belly-band-with-colour-options .radio-button-colour').on('change', function (e) {
		$('.selected-belly-band-with-colour').addClass('show');
		$('.selected-belly-band-with-colour').html('<div class="title">Belly Band With Colour: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('input[name="belly_band"]').on('change', function (e) {
		$('.selected-belly-band').addClass('show');
		$('.selected-belly-band').html('<div class="title">Belly Band: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('input[name="wax_seal_colour"').on('change', function (e) {
		$('.selected-wax-seal-colour').addClass('show');
		$('.selected-wax-seal-colour').html('<div class="title">Wax Seal Colour: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('#envelope-colour-options .radio-button-colour').on('change', function (e) {
		$('.selected-envelope-colour').addClass('show');
		$('.selected-envelope-colour').html('<div class="title">Envelope Colour: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('input[name="evelope_liner"]').on('change', function (e) {
		$('.selected-evelope-liner').addClass('show');
		$('.selected-evelope-liner').html('<div class="title">Envelope Liner: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('input[name="envelope_seal"]').on('change', function (e) {
		$('.selected-evelope-seal').addClass('show');
		$('.selected-evelope-seal').html('<div class="title">Envelope Seal: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('input[name="address_label"]').on('change', function (e) {
		$('.selected-address-label').addClass('show');
		$('.selected-address-label').html('<div class="title">Address Label: </div><div class="value">' + $(this).val() + '</div>');
	});

	$('input[name="diy"]').on('change', function (e) {
		$('.selected-diy').addClass('show');
		$('.selected-diy').html('<div class="title">DIY: </div><div class="value">' + $(this).val() + '</div>');
	});
});

/* Script on scroll
------------------------------------------------------------------------------*/
$( window ).on( 'scroll',function() {
});

/* Script on resize
------------------------------------------------------------------------------*/
$(window).on('resize', function () {
	smooth_scroll_div();
});

/* Custom function
------------------------------------------------------------------------------*/

//Increment/decrement counter
function counter() {
	const minus = $('.single-product .product-content-wrapper .quantity__minus');
	const plus = $('.single-product .product-content-wrapper .quantity__plus');
	const input = $('.single-product .product-content-wrapper .quantity input');

	minus.click(function (e) {
		e.preventDefault();
		var value = input.val();
		if (value > 1) {
			value--;
		}
		input.val(value);
	});

	plus.click(function (e) {
		e.preventDefault();
		var value = input.val();
		value++;
		input.val(value);
	})
}

// custome dropdown with color dot
function formatState(state) {
    if (!state.id) {
        return state.text;
	}
	var $state1 = $(state.element).data('bg');
    var $state = $(
        '<span class= "'+ state.element.value.toLowerCase().replaceAll(/\s/g,'').replace(/[^\w\s]/gi, '-') +'"> <em style="background-color:'+ $state1 +';"></em>' + state.text + '</span>'
        );
    return $state;
};

// Smooth scroll on div //
function smooth_scroll_div() {
	if ($(window).innerWidth() < 815) {
		$(".radio-button-checkbox").click(function () {
			if ($(this).closest('.colour-swatch-wrap').siblings(".radio-button-colour-wrap").length) {
				$('.single-product #personalise-modal').animate({
					scrollTop: $(this).closest('.colour-swatch-wrap').siblings(".radio-button-colour-wrap").offset().top
				},100);
			}
		});
	}
}