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
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require nested_form_fields
//= require bootstrap-typeahead-rails
//= require_tree .
//= require bootstrap-select

$(window).bind('page:change', function() {
    $('.project-auto-complete').typeahead({
  name: 'Projects',
  ttl: 0,
  prefetch: '/operations/projects',  
  limit: 10 });
    $('.selectpicker').selectpicker();
    });

$(document).ready( function () {
    $('.project-auto-complete').typeahead({
  name: 'Projects',
  prefetch: {url: "/operations/projects", ttl: 0},
  ttl: 1,
  //remote: "/operations/projects",
  limit: 10 });
	$('.selectpicker').selectpicker();});
// 	$('.add_nested_fields_link').click().function(){
// 		$('.selectpicker').selectpicker();		
// 		}
// });

$(function() {
  $("#operations_filter input").keyup(function() {
    $.get($("#operations_filter").attr("action"), $("#operations_filter").serialize(), null, "script");
    return false;
  });
});

