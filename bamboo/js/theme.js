(function ($, Drupal) {
  Drupal.behaviors.bamboo = {
    attach: function(context, settings) {

      // Highlight today in office hours
      var today = new Date();
      $(context).find('tr[data-day=' + today.getDay() + ']').addClass('today');

      // Open webforms in modal
      $(context).find('a[href^="/form/"]').click(function(e) {

        // Check for modal
        var href = $(this).attr('href');
        var $form = $('.region-modals form[data-form-path="' + href + '"]');
        if ($form.length) {
          var $modal = $form.parents('.block');
          $modal.toggleClass('visible', true);
          e.preventDefault();
        }
      });

      // Modal behaviours
      $('.region-modals .block .content-wrapper').click(function(e) {
        e.stopImmediatePropagation();
      });

      // Clicking background closes modal
      $('.region-modals .block').click(function(e) {
        e.stopImmediatePropagation();
        $(this).toggleClass('visible', false);
      });

      // Add close button to modal
      $('.region-modals .block .content-wrapper').each(function() {
        if ($(this).find('.close').length == 0) {
          $(this).append('<a class="close">X</a>');
        }
      });
      $('.region-modals .block .close').click(function(e) {
        $(this).parents('.block').toggleClass('visible', false);
      });

      // Toggle mobile menu
      $(context).find('body > header').click(function(e) {
        $(context).find('body').toggleClass('mobile-nav--open');
        e.stopImmediatePropagation();
      });
      $(context).find('body > header a').click(function(e) {
        e.stopImmediatePropagation();
      });
      $(context).find('html').on('click', '.mobile-nav--open', function(e) {
        $(context).find('body').toggleClass('mobile-nav--open', false);
      });

      // Switch to mobile when menu no longer fits
      var navWidth = 0;
      $(context).find('.region-primary_menu ul li').each(function() {
        navWidth += $(this).outerWidth();
      });
      if (navWidth) {
        $(window).resize(function() {
          $('body').toggleClass('mobile-nav', (window.innerWidth * 0.9) < navWidth);
        });
        $(window).resize();
      }

    }
  }
})(jQuery, Drupal);

// Reposition map
function alterMap(details) {
  if (window.innerWidth > 1000) {
    details.map.panBy(-60, 0);
  }
  details.map.setOptions({
    disableDefaultUI: true
  });
  details.marker.setIcon({
    anchor: {x: 18, y: 58},
    path: 'M18,0C8.059,0,0,8.059,0,18c0,2.141,0.373,4.194,1.059,6.099C3.559,31.039,18,58,18,58s14.441-26.961,16.94-33.901 C35.626,22.194,36,20.141,36,18C36,8.059,27.941,0,18,0z M18,29c-5.868,0-10.625-4.757-10.625-10.625S12.132,7.75,18,7.75 s10.625,4.757,10.625,10.625S23.868,29,18,29z',
    fillColor: 'red',
    fillOpacity: 1,
    strokeOpacity: 0
  });
}
