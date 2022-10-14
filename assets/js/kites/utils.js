function reset() {
  timeline.clear();

  gsap.set([k, kImg], {
    x: 0,
    y: 0,
    rotation: 0,
  });
}

function showCombos() {
  $('.button-bank.combos').attr('style', 'display: block');
}
