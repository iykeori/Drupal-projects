(function() {

  // Toggle mobile menu
  let togglerEl = document.querySelector('.navbar-toggler');
  let navEl = document.querySelector('.region-primary-menu');
  togglerEl.addEventListener('click', function() {
    togglerEl.classList.toggle('active');
    navEl.classList.toggle('active');
  });

})();

// Disable dropdowns on mobile
window.addEventListener('DOMContentLoaded', function() {
  let navEl = document.querySelector('.region-primary-menu');
  let linkEls = document.querySelectorAll('a.dropdown-toggle');
  for (let i = 0; i < linkEls.length; i = i + 1) {
    linkEls[i].addEventListener('click', function(e) {
      if (navEl.classList.contains('active')) {
        e.stopImmediatePropagation();
      }
    });
  }
});
