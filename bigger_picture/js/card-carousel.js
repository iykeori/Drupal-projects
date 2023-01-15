(function() {

  let position = {};
  let counts = {};

  let els = document.querySelectorAll('.card-carousel [data-slide]');
  for (let i = 0; i < els.length; i = i + 1) {

    // Disable previous button until applicable
    let target = els[i].getAttribute('href');
    document.querySelector(target).classList.toggle('card-carousel--first', true);

    // Setup previous and next buttons
    els[i].addEventListener('click', function(e) {
      let items = document.querySelector(target + ' .card-carousel-items');
      if (typeof position[target] == 'undefined') {
        position[target] = 0;
        counts[target] = document.querySelectorAll(target + ' .card-carousel-items > *').length;
      }

      // Determine number of items in viewport
      let viewportRect = document.querySelector(target + ' .card-carousel-items').getBoundingClientRect();
      let itemRect = document.querySelector(target + ' .card-carousel-items > *').getBoundingClientRect();
      let itemsVisible = Math.round(viewportRect.width / itemRect.width);

      // Increase or decrease position
      if (this.dataset.slide == 'prev') {
        position[target] = Math.max(0, position[target] - 1);
      } else {
        position[target] = Math.min(counts[target] - itemsVisible, position[target] + 1);
      }
      document.querySelector(target).classList.toggle('card-carousel--first', position[target] == 0);
      document.querySelector(target).classList.toggle('card-carousel--last', position[target] == counts[target] - itemsVisible);
      items.style.left = -itemRect.width * position[target] + 'px';
      e.preventDefault();
      return false;
    });
  }

})();
