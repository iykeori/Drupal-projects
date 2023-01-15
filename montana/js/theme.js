(function() {

  // Disable services dropdown on mobile
  var linkEl = document.querySelector('.navbar-collapse a[href="/services"]');
  var navEl = document.querySelector('.navbar-collapse');
  linkEl.addEventListener('click', function(e) {
    var styles = getComputedStyle(navEl);
    if (styles.position == 'fixed') {
      e.stopImmediatePropagation();
    }
  });

  // Toggle video classes
  var els = document.querySelectorAll('.media--video video');
  for (var i = 0; i < els.length; i = i + 1) {
    els[i].parentNode.classList.toggle('video--paused', true);
    els[i].addEventListener('play', function() {
      this.parentNode.classList.toggle('video--paused', false);
      this.parentNode.classList.toggle('video--playing', true);
    });
    els[i].addEventListener('pause', function() {
      this.parentNode.classList.toggle('video--paused', true);
      this.parentNode.classList.toggle('video--playing', false);
    });
  }

})();
