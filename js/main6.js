anime({
  targets: '.el',
  loop: true,
  direction: 'alternate', 
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 500},
    {value: .5, easing: 'easeInOutQuad', duration: 1200},
  ],
  delay: anime.stagger(150, {grid: [22, 11], from: 'center'})
});