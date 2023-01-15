addEventListener('load', function() {
  let appointmentRequestImages = 2;
  if (typeof appointmentRequestImagesFilter == 'function') {
    appointmentRequestImages = appointmentRequestImagesFilter();
  }
  let random = Math.floor(Math.random() * appointmentRequestImages) + 1;
  document.querySelector('.appointment-form').classList.add('random-' + random);
});
