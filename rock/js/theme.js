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
