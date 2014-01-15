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
	    
	if(!box.checked == true)
            e.style.display = 'none';
	else
	    e.style.display = 'block';    
	
	//e.toggle();
    
    $('#is_protocol').click (function() {
	e = document.getElementById('operation_protocol_name');
	box = document.getElementById('is_protocol');
//	if(e.style.display == 'block')
//            e.style.display = 'none';
//	else
//	    e.style.display = 'block';
	    
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
    validate();
    document.onkeyup = validate;
    document.onclick = validate;

    function validate(e) {
	console.log(names);
	chem_form_valid();
	if (project_name_valid() & amounts_valid() & locations_valid() & catalog_nums_valid() & dates_valid() & chemicals_names_valid() & protocol_name_valid() &
	    user_names_valid()) {
		console.log(names);
		console.log(userNames);
	   $('#submit').show();
	} else {
	    $('#submit').hide();
	}
    };
    function chem_forms_valid() {
	 var result = units_valid() & critical_amounts_valid() & groups_valid() & project_name_valid();
	 if (result && $('.unit-validation').filter(":visible").length > 0) {
		var array = $('.chemical-name-validation').filter(":visible");
		for (var i = 0; i < array.length; i++) {
			var name = array.eq(i).val();
			if ($.inArray(name, names) < 0) {
				names.push(name);
			}
		}
	 }
	 return result;
    }
    function amounts_valid() {
	var array = $('.amount-validation').filter(":visible");
	return greaterThanZeroValidation(array);
    };
    
    function user_names_valid() {
	var array = $('.users-auto-complete').filter(":visible");
	var result = true;
	for (var i = 0; i < array.length; i++) {
		var name = array.eq(i).val();
		if ($.inArray(name, userNames) < 0 ) {
			array.eq(i).css({
				'border': '2px solid red'	
			});
			result = false;
		} else {
			array.eq(i).css({
				'border': '2px solid black'	
			});
		}
	}
	if (!result) {
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
	names = [];
	$.ajax({url: "/operations/chemicals",
	       async: false,
	       cache: false,
	       success: function(result){
		names = result;
		}
	});
	console.log("names acquired");
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
	console.log("userNames acquired");
    }
    
    function project_name_valid() {
	var array = $('.project-validation').filter(":visible");
	return presence_validation(array);
    }
    
    function chemicals_names_valid() {
	var array = $('.chemical-name-validation').filter(":visible");
	var result = true;
	for (var i = 0; i < array.length; i++) {
		var name = array.eq(i).val();
		if ($.inArray(name, names) < 0 ) {
			array.eq(i).css({
				'border': '2px solid red'	
			});
			result = false;
		} else {
			array.eq(i).css({
				'border': '2px solid black'	
			});
		}
	}
	if (!result) {
		return false;
	}
	return presence_validation(array);
    }
    function protocol_name_valid() {
	var array = $('#operation_name').filter(":visible");
	return presence_validation(array);
    }
    function units_valid() {
	var array = $('.unit-validation').filter(":visible");
	return presence_validation(array);
    }
    function groups_valid() {
	var array = $('.group-validation').filter(":visible");
	return presence_validation(array);
    }
    
    function critical_amounts_valid() {
	var array = $('.critical-amount-validation').filter(":visible");
	return greaterThanZeroValidation(array);
    }
    
    function chem_form_valid() {
	result = true;
	var array = $('#chemical_name').filter(":visible");
	result &= presence_validation(array);
	result &= ($.inArray(array.eq(0).val(), names) < 0);
	if (!result) {
		array.eq(0).css({
			'border': '2px solid red'	
		});
	}
	array = $('#chemical_unit');
	result &= presence_validation(array);
	array = $('#chemical_critical_amount');
	result &= greaterThanZeroValidation(array);
	array = $("#group_name");
	result &= presence_validation(array);
	return result;
    };
    function dates_valid() {
	var array = $('.date-validation').filter(":visible");
	return presence_validation(array);
    };
    function locations_valid() {
	var array = $('.location-validation').filter(":visible");
	return presence_validation(array);
    };
    function catalog_nums_valid() {
	var array = $('.catalog-num-validation').filter(":visible");
	return presence_validation(array);
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

