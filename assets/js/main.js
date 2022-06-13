$(document).ready(function() {
  var href = window.location.href;

  $('a[href="' + href + '"]').parents('li').addClass('active');
});

