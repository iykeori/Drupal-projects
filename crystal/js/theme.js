addEventListener('load', function() {

  // Random image next to appointment request form
  let appointmentRequestImages = 9;
  if (typeof appointmentRequestImagesFilter == 'function') {
    appointmentRequestImages = appointmentRequestImagesFilter();
  }
  let random = Math.floor(Math.random() * appointmentRequestImages) + 1;
  document.querySelector('.appointment-form').classList.add('random-' + random);

  // Start carousels after load
  jQuery('.carousel').carousel('cycle');

});

(function() {

  // Disable services dropdown on mobile
  var linkEl = document.querySelector('.navbar-collapse a[href="/services"]');
  var navEl = document.querySelector('.navbar-collapse');
  if (linkEl && navEl) {
    linkEl.addEventListener('click', function(e) {
      var styles = getComputedStyle(navEl);
      if (styles.position == 'fixed') {
        e.stopImmediatePropagation();
      }
    });
  }

})();
