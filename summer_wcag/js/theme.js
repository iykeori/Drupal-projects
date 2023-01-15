var reviews = document.querySelectorAll('.review-random .review');
if (reviews.length > 0) {
  var r = Math.floor(reviews.length * Math.random());
  reviews[r].style.display = 'block';
  reviews[r].removeAttribute('aria-hidden');
}
