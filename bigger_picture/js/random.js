(function() {

  // Sort all elements with "data-random" attribute into groups
  let els = document.querySelectorAll('[data-random]');
  let groups = {};
  for (let i = 0; i < els.length; i = i + 1) {
    let keyword = els[i].dataset.random;
    if (groups[keyword]) {
      groups[keyword].push(els[i]);
    } else {
      groups[keyword] = [els[i]];
    }
  }

  // Randomly display only one element within each group
  for (let keyword in groups) {
    let pick = Math.floor(Math.random() * groups[keyword].length);
    for (let i = 0; i < groups[keyword].length; i = i + 1) {
      if (i == pick) {
        groups[keyword][i].style.display = 'block';
      } else {
        groups[keyword][i].style.display = 'none';
      }
    }
  }

})();
