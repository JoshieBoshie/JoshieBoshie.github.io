$(document).ready(function() {
	// // YOUR CODE HERE

  $("#GIF").click(function() {
    $('#shibaa').fadeIn(1000);
  })

  $('#ab').click(function(){
  $(document).scrollTop($('#about').offset().top);
});

  $('#pr').click(function(){
  $(document).scrollTop($('#projectsname').offset().top);
});

  $('#co').click(function(){
  $(document).scrollTop($('#contact').offset().top);
});

  $('#troll').click(function(){
  $('#navbar').fadeOut(1000);
  $('#fail').fadeIn(1000);
});



});

// new TypeIt('#example1', {
//   strings: 'This is a simple string.',
//   speed: 50,
//   // autoStart: true
// });
