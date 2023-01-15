(function($) {

  // Close when click occurs outside of menu
  $(document).on('touchstart click', function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Prevent navigation clicks from bubbling up to document
  $('.nav .nav-link').on('touchstart click', function(e) {
    e.stopImmediatePropagation();
  });

  // Follow anchor link if dropdowns are disabled (i.e. mobile)
  $('.dropdown').on('shown.bs.dropdown', function(e) {
    var $menu = $(this).find('.dropdown-menu:visible');
    if ($menu.length == 0) {
      window.location.href = $(this).find('.dropdown-toggle').attr('href');
    }
  });

})(jQuery);
