(function($) {

  // Close when click occurs outside of menu
  $(document).on('touchstart click', function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Prevent navigation clicks from bubbling up to document
  $(document).on('touchstart', '.nav-mobile', function(e) {
    e.stopImmediatePropagation();
  });

  // Follow anchor link if dropdowns are disabled (i.e. mobile)
  $('.dropdown').on('shown.bs.dropdown', function(e) {
    var $menu = $(this).find('.dropdown-menu:visible');
    if ($menu.length == 0) {
      window.location.href = $(this).find('.dropdown-toggle').attr('href');
    }
  });

  // Toggle mobile class
  var $nav = $('.navbar-collapse');
  var navbarMobile = false;
  function toggleClass() {
    if ($nav.css('position') == 'fixed') {
      if (!navbarMobile) {
        $nav.get(0).dispatchEvent(new CustomEvent('navmobile', {
          bubbles: true
        }));
      }
      navbarMobile = true;
    } else {
      if (navbarMobile) {
        $nav.get(0).dispatchEvent(new CustomEvent('navdesktop', {
          bubbles: true
        }));
      }
      navbarMobile = false;
    }
    $nav.toggleClass('nav-mobile', navbarMobile);
  }
  toggleClass();
  $(window).resize(toggleClass);

})(jQuery);
