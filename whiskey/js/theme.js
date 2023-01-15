(function() {

  // Disable services dropdown on mobile
  let linkEl = document.querySelector('.navbar-collapse a[href="/services"]');
  let navEl = document.querySelector('.navbar-collapse');
  if (linkEl && navEl) {
    linkEl.addEventListener('click', function(e) {
      let styles = getComputedStyle(navEl);
      if (styles.position == 'fixed') {
        e.stopImmediatePropagation();
      }
    });
  }

  // Toggle video classes
  let els = document.querySelectorAll('.media--video video');
  for (let i = 0; i < els.length; i = i + 1) {
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
