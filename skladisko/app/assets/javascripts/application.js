// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_nested_form
//= require jquery.turbolinks
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require bootstrap-select
// C= require nested_form_fields
//= require bootstrap-typeahead-rails
//= require_tree .

//$(window).bind('page:change', function() {
//    $("#operations_filter input").keyup(function() {
//        $.get($("#operations_filter").attr("action"), $("#operations_filter").serialize(), null, "script");
//        return false;
//      });
//    $('.project-auto-complete').typeahead({
//  name: 'Projects',
//  ttl: 0,
//  prefetch: '/operations/projects',  
//  limit: 10 });
//    $('.selectpicker').selectpicker();
//    });

$(document).ready( function () {
    // change
    $("#operations_filter input").change(function() {
        $.get($("#operations_filter").attr("action"), $("#operations_filter").serialize(), null, "script");
        return false;
      });
    
    // key up
    $("#operations_filter input").keyup(function() {
        $.get($("#operations_filter").attr("action"), $("#operations_filter").serialize(), null, "script");
        return false;
      });
    
    $('.project-auto-complete').typeahead({
  name: 'Projects',
  prefetch: {url: "/operations/projects", ttl: 0},
  ttl: 1,
  //remote: "/operations/projects",
  limit: 10 });
    
    $('.protocols-name-auto-complete').typeahead({
    name: 'Protocols',
    prefetch: {url: "/operations/protocols", ttl: 0},
    ttl: 1,
    limit: 10 });
    
    $('.chemicals-auto-complete').typeahead({
    name: 'Chemicals',
    prefetch: {url: "/operations/chemicals", ttl: 0},
    ttl: 1,
    limit: 10 });
    
    $('.users-auto-complete').typeahead({
    name: 'user',
    prefetch: {url: "/operations/users", ttl: 0},
    ttl: 1,
    limit: 10 });
    
    //$('.chemical-form').toggle();//css('display','none');
    
    //$('.chemical-new').click(function() { $('.chemical-form').show() });
    $('.chemical-new').click(function() { $(this).parent().next("div.row").children("div.chemical-form").toggle() });
    
    $('.groups-auto-complete').typeahead({
    name: 'Groups',
    prefetch: {url: "/groups", ttl: 0},
    ttl: 1,
    limit: 10 });
    
    //$('.amount-validation').keyup(function() {
    //    value = $(this).val();
    //    if (!$.isNumeric(value) && !(value == "-")) {
    //        $(this).val("");
    //    }
    //});
    
	e = document.getElementById('operation_protocol_name');
	box = document.getElementById('is_protocol');
//	if(e.style.display == 'block')
//            e.style.display = 'none';
//	else
//	    e.style.display = 'block';
	if (box != null) {
		if(!box.checked == true)
	            e.style.display = 'none';
		else
		    e.style.display = 'block';    
	}
    
    
    $('#upload').hide();
    $('#restore_data_attachment').change(toggleExpirable(e));
    
    
    
    $('#is_protocol').click (function() {
	e = document.getElementById('operation_protocol_name');
	box = document.getElementById('is_protocol');
	if(!box.checked == true)
            e.style.display = 'none';
	else
	    e.style.display = 'block';    
	
	//e.toggle();
    });
    $('.chemical-new').click(function() {
	$( "#dialog" ).dialog({
		resizable: true,
		draggable: false,
		height: $('form').outerHeight(),
		width: $('form').outerWidth(),
		border: '1px solid red',
		modal: true,
		buttons: {
			"Create chemical": function() {
				if (!chem_form_valid()) {
					return;
				}
				var formData = {};
				formData['name'] = $('#chemical_name').val();
				formData['unit'] = $('#chemical_unit').val();
				formData['critical_amount'] = $('#chemical_critical_amount').val();
				formData['note'] = $('#chemical_note').val();
				sendData = {};
				sendData['chemical'] = formData;
				sendData["group_name"] = $("#group_name").val();
				console.log(formData);				
				$.ajax({
					url : "/chemicals",
					type: "POST",
					data : sendData,
					async: false,
					cache: false,
					success: function(data, textStatus, jqXHR)
					{
						getChemNames();
						getChemUnits();
						validate();
					},
					error: function (jqXHR, textStatus, errorThrown)
					{
						console.log(textStatus);
					}
				});
				$( this ).dialog( "close" );
			},
			Cancel: function() {
				$( this ).dialog( "close" );
			}
		}
	});
    });
    $('#submit').hide();
    getChemNames();
    getUserNames();
    getChemUnits();
    validate();
    document.onkeyup = validate;
    document.onclick = validate;

    function validate(e) {
	toggleExpirable();
	chem_form_valid();
	presence_validation_selectors = [".project_validation", ".location-validation", '.catalog-num-validation', '.date-validation', '#operation_name', "#operation_project_name"];
	presence_selectors_valid = array_presence_validator(presence_validation_selectors);
	if (presence_selectors_valid & amounts_valid() & chemicals_names_valid() & user_names_valid()){
	   $('#submit').show();
	} else {
	    $('#submit').hide();
	}
	setUnits();
	
    };
    
    function toggleExpirable() {
	$('.date-validation').hide();
	var array = $('.expirable').filter(":visible");
	for (var i = 0; i < array.length; i++) {
		console.log("now");
		var id = array.eq(i).attr('id');
		var number_in_id = id.match(/\d+/);
		var dateInput = $("#operation_containers_attributes_" + number_in_id + "_expiration_date");
		if (array.eq(i).is(":checked")) {
			dateInput.show();
		} else {
			dateInput.hide();
		}
	}
    }
    
    function getChemUnits() {
	units = {};
	var url = "/chemicals/units";
	$.ajax({
		url : url,
		type: "GET",
		async: false,
		cache: false,
		success: function(data, textStatus, jqXHR)
		{
			units = data;
		},
	});
    }
    
    function setUnits() {
	var array = $('.chemicals-auto-complete').filter(":visible");
	for (var i = 0; i < array.length; i++) {
		var id = array.eq(i).attr('id');
		var number_in_id = id.match(/\d+/);
		var amountLabel = $("label[for='operation_containers_attributes_" + number_in_id + "_amount']");
		var url = "/chemicals/"+array.eq(i).val()+"/unit";
		amountLabel.text("Amount");
		for (var i = 0; i < units.length; i++) {
			if (units[i].name == array.eq(i).val()) {
				amountLabel.text("Amount (remaining: " + units[i].total_amount + units[i].unit + ")");
				console.log(array.eq(i).val() + " " + i);
			}
		}
	}
    }
    
    function array_presence_validator(presence_validation_selectors) {
	var presence_selectors_valid = true;
	for (var i = 0; i < presence_validation_selectors.length; i++){
		var array = $(presence_validation_selectors[i]).filter(":visible");
		presence_selectors_valid &= presence_validation(array);
	}
	return presence_selectors_valid;
    }
    
    function amounts_valid() {
	var array = $('.amount-validation').filter(":visible");
	return greaterThanZeroValidation(array);
    };
    
    function user_names_valid() {
	var array = $('.users-auto-complete').filter(":visible");
	if (!array_contains_validator(array, userNames)) {
		return false;
	}
	return presence_validation(array);
    }
    
    function greaterThanZeroValidation(array) {
	var result = true;
	for (var i = 0; i < array.length; i++) {
		array.eq(i).css({
			'border': '2px solid black'	
		});
		if (!$.isNumeric(array.eq(i).val()) || parseInt(array.eq(i).val()) < 0) {
			array.eq(i).css({
				'border': '2px solid red'	
			});
			result = false;
		}
	}
	return result;
    }
    
    function getChemNames() {
	chemicalNames = [];
	$.ajax({url: "/operations/chemicals",
	       async: false,
	       cache: false,
	       success: function(result){
		chemicalNames = result;
		}
	});
    };
    
    function getUserNames() {
	userNames = [];
	$.ajax({url: "/operations/users",
	       async: false,
	       cache: false,
	       success: function(result){
		userNames = result;
		}
	});
    }
    
    function chemicals_names_valid() {
	var array = $('.chemicals-auto-complete').filter(":visible");
	if (!array_contains_validator(array, chemicalNames)) {
		return false;
	}
	return presence_validation(array);
    }
    
    function array_contains_validator(elements, array) {
	result = true;
	for (var i = 0; i < elements.length; i++) {
		var name = elements.eq(i).val();
		if ($.inArray(name, array) < 0 ) {
			elements.eq(i).css({
				'border': '2px solid red'	
			});
			result = false;
		} else {
			elements.eq(i).css({
				'border': '2px solid black'	
			});
		}
	}
	return result;
    }
    
    function chem_form_valid() {
	var presence_validation_selectors = ['#chemical_name', '#chemical_unit', '#chemical_critical_amount', "#group_name"];
	return array_presence_validator(presence_validation_selectors);
    };

    function presence_validation(array) {
	var result = true;
	for (var i = 0; i < array.length; i++) {
		array.eq(i).css({
			'border': '2px solid black'	
		});
		if (!array.eq(i).val().length > 0) {
			array.eq(i).css({
				'border': '2px solid red'	
			});
			result = false;
		}
	}
	return result;
    }
    $('.selectpicker').selectpicker();
});
// 	$('.add_nested_fields_link').click().function(){
// 		$('.selectpicker').selectpicker();		
// 		}
// });

//$(function() {
//  $("#operations_filter input").keyup(function() {
//    $.get($("#operations_filter").attr("action"), $("#operations_filter").serialize(), null, "script");
//    return false;
//  });
//});

$(document).on('nested:fieldAdded', function(event){
    $('.chemicals-auto-complete').typeahead({
        name: 'Chemicals',
        prefetch: {url: "/operations/chemicals", ttl: 0},
        ttl: 1,
        limit: 10 });
    
    $('.users-auto-complete').typeahead({
    name: 'user',
    prefetch: {url: "/operations/users", ttl: 0},
    ttl: 1,
    limit: 10 });
    
    //$('.chemical-form').toggle();//css('display','none');
    
    //$('.chemical-new').unbind("click");
    //$('.chemical-new').click(function() { $(this).parent().next("div.row").children("div.chemical-form").toggle() });
    
    $('.selectpicker').selectpicker();
    
    //$('.amount-validation').keyup(function() {
    //    value = $(this).val();
    //    if (!$.isNumeric(value) && !(value == "-")) {
    //        $(this).val("");
    //    }
    //});
})

