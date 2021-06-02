const animationEl = document.querySelector('.inner .content span')

let clicked = false;

animationEl.addEventListener ('click', function () {
  clicked = !clicked;
  if(clicked) {
      console.log('log 기록 되고 있습니다.')
      this.classList.add('clicked')
  } else {
        this.classList.remove('clicked')
      }
    }) 