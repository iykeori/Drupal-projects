jQuery(function($) {

  var currentSlide = 0;
  var numberofslides;
  var i = 1;

  $(".menubutton").click(function() {
    $(".mobilemenuwrap").css("display", "block");
  });

  $(".closex").click(function() {
    $(".mobilemenuwrap").css("display", "none");
  });

  $(".contactpopbutton").click(function() {
    $(".contactpopwrap").css("display", "block");
  });

  $("#closecontact").click(function() {
    $(".contactpopwrap").css("display", "none");
  });

  $('.contactpopwrap').click(function(e) {
    if (e.target !== this)
      return;
    $(".contactpopwrap").css("display", "none");
  });

  $(".book").click(function() {
    $(".appointmentpopwrap").css("display", "block");
  });

  $(".appointmentpopbutton").click(function() {
    $(".appointmentpopwrap").css("display", "block");
  });

  $("#closeappointment").click(function() {
    $(".appointmentpopwrap").css("display", "none");
  });

  $('.appointmentpopwrap').click(function(e) {
    if (e.target !== this)
      return;
    $(".appointmentpopwrap").css("display", "none");
  });

  $('.google-maps').click(function() {
    $('.google-maps iframe').css("pointer-events", "auto");
  });

  /**
   * Front page slides
   */
  jQuery(window).on('load', function() {

    numberofslides = $('.slide').length;

    while (i <= numberofslides) {
      var activeslide = "#slide" + i;
      $(activeslide).css("display", "block");
      i++;
    }

    var slide = 1;
    var interval = setInterval(function() {
      advance(1);
    }, 6000);

    function advance(amount) {
      currentSlide += amount;

      if (numberofslides > 1) {

        if (currentSlide > numberofslides) {
          currentSlide = 1;
        }

        if (currentSlide == numberofslides) {
          jQuery("#slide1").fadeIn(1000, function() {
            var i = 2;
            while (i <= numberofslides) {
              var activeslide = "#slide" + i;
              $(activeslide).css("display", "block");
              i++;
            }
          });

        } else {
          jQuery("#slide" + currentSlide).fadeOut(1000);
        }
      };
    }
  });

});
