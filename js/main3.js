const dlMode = document.getElementById('mo-le')
const tiMode = document.getElementById('dark-md')
const daliMode = document.querySelector('body')
const txtMode = document.querySelectorAll('.text-container > span ')
let ldMode = false;

dlMode.addEventListener('click', () => {
  ldMode = !ldMode;
  if(ldMode) {
    daliMode.classList.add('dark')
    tiMode.classList.add('dark')
    dlMode.classList.add('move-to-left')
  } else {
    daliMode.classList.remove('dark')
    tiMode.classList.remove('dark')
    dlMode.classList.remove('move-to-left')
  }
})

for( let i = 0; i < txtMode.length; i++) {
  dlMode.addEventListener('click', function () {
    txtMode[i].classList.toggle('dark')
  })
}

gsap.to('.t1', {
  repeat: -1,
  yoyo: true,
  y: 300,
  ease: 'bounce.out',
  duration: 4
});

let tl1 = gsap.timeline({
  repeat:-1,
  yoyo:true
});
  tl1.to('.t2', {
    x: 300,
    duration:2
  })

to('t2', {
  x:-400,
  duration:2
});