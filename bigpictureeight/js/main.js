jQuery(function($) {

  var numberofslides;
  var i = 1;
  var slide = 1;
  var currentSlide = 1; // Slide Show - Current image
  var numSlides = $('ul.slides li').length; // Count the number of slides

  $('.menubutton').click(function() {
    $('.mobilemenuwrap').css('display', 'block');
  });

  $('.menubuttontop').click(function() {
    $(".mobilemenuwrap").css('display', 'block');
  });

  $('.closex').click(function() {
    $('.mobilemenuwrap').css('display', 'none');
  });


  $('.contactpopbutton').click(function() {
    $('.contactpopwrap').css('display', 'block');
  });

  $('#closecontact').click(function() {
    $('.contactpopwrap').css('display', 'none');
  });

  $('.contactpopwrap').click(function(e) {
    if (e.target !== this)
      return;
    $('.contactpopwrap').css('display', 'none');
  });

  $('.book').click(function() {
    $('.appointmentpopwrap').css('display', 'block');
  });

  $('.appointmentpopbutton').click(function() {
    $('.appointmentpopwrap').css('display', 'block');
  });

  $('#closeappointment').click(function() {
    $('.appointmentpopwrap').css('display', 'none');
  });

  $('.appointmentpopwrap').click(function(e) {
    if (e.target !== this)
      return;
    $('.appointmentpopwrap').css('display', 'none');
  });

  $('.google-maps').click(function() {
    $('.google-maps iframe').css("pointer-events", "auto");
  });

  $(window).on('load', function() {

    // Preloader & Slider Arrows
    $('#preloader').css('display', 'none');

    if (numSlides > 1) {
      $('.slidearrow').fadeIn(500);

      var slide = 1;
      var interval = setInterval(function() {
        advance(1);
      }, 6000);

      $('#rightarrow').click(function() {
        clearInterval(interval);
        advance(1);
      });

      $('#leftarrow').click(function() {
        clearInterval(interval);
        advance(-1);
      });

      // Advance specified number of slides
      function advance(amount) {
        $('.slide' + currentSlide).fadeOut(500);

        // Adjust current image
        currentSlide += amount;

        // Loop if we've moved past either end
        if (currentSlide < 1) currentSlide = numSlides;
        if (currentSlide > numSlides) currentSlide = 1;

        $('.slide' + currentSlide).fadeIn(500);
      }
    }
  });

});
