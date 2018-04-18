$(function() {
  if (location.pathname !== '/') {
  	$('#nav-item-list .nav-link[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
  } else {
  	$('#nav-item-list .nav-item:first-child .nav-link').addClass('active');
  }
});