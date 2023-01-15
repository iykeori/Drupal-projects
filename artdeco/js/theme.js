var navbar = document.querySelector('.page-header .navbar');
var navbarTop = navbar.offsetTop;
var navbarFixed = false;
var navbarMobile = false;

// Fix navbar to top on scroll
window.addEventListener('scroll', function() {
  if (navbarMobile) return;
  var scrollPos = document.scrollingElement.scrollTop + parseInt(document.body.style.paddingTop);
  if (navbarFixed) {
    if (scrollPos < navbarTop) {
      document.body.classList.toggle('navbar-fixed', false);
      navbarFixed = false;
      document.querySelector('.page-header').style.marginTop = '0px';
    }
  } else {
    navbarTop = navbar.offsetTop;
    if (scrollPos > navbarTop) {
      document.body.classList.toggle('navbar-fixed', true);
      navbarFixed = true;
      document.querySelector('.page-header').style.marginTop = navbar.offsetHeight + 'px';
    }
  }
});

// Fix navbar to top on mobile
document.body.addEventListener('navmobile', function() {
  navbarMobile = true;
  document.body.classList.toggle('navbar-fixed', true);
  document.querySelector('.page-header').style.marginTop = navbar.offsetHeight + 'px';
});

document.addEventListener('navdesktop', function() {
  navbarMobile = false;
  document.body.classList.toggle('navbar-fixed', false);
  document.querySelector('.page-header').style.marginTop = '0px';
});
