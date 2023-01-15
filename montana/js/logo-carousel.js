window.addEventListener('load', function() {
  let els = document.querySelectorAll('.logo-carousel');
  for (let i = 0; i < els.length; i = i + 1) {
    let container = els[i];
    let inner = container.querySelector('.logo-carousel-inner');

    // Activate carousel
    (function() {

      let position = 0;
      function update() {
        if (inner.getBoundingClientRect().width > container.getBoundingClientRect().width) {

          // When logo slides off screen, but it to the end
          let logos = inner.querySelectorAll('.media');
          for (let i = logos.length - 1; i >= 0; i = i - 1) {
            let rect = logos[i].getBoundingClientRect();
            if (rect.right < 0) {
              position = position + rect.width;
              inner.removeChild(logos[i]);
              inner.appendChild(logos[i]);
            }
          }

          // Shift all logos over
          position = position - 1;
          inner.style.left = position + 'px';
        }
        requestAnimationFrame(update);
      }
      update();

    })();
  }
});
