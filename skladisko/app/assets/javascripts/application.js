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
    $("#operations_filter input").change(function() {
        $.get($("#operations_filter").attr("action"), $("#operations_filter").serialize(), null, "script");
        return false;
      });
    
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
    
    $('.amount-validation').keyup(function() {
        value = $(this).val();
        if (!$.isNumeric(value) && !(value == "-")) {
            $(this).val("");
        }
    });
    
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
    
	$('.selectpicker').selectpicker();});
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
    
    $('.chemical-new').unbind("click");
    $('.chemical-new').click(function() { $(this).parent().next("div.row").children("div.chemical-form").toggle() });
    
    $('.selectpicker').selectpicker();
    
    $('.amount-validation').keyup(function() {
        value = $(this).val();
        if (!$.isNumeric(value) && !(value == "-")) {
            $(this).val("");
        }
    });
})

