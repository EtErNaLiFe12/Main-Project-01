const dlMode = document.getElementById('mo-le')
const tiMode = document.getElementById('dark-md')
const daliMode = document.querySelector('body')
const txtMode = document.querySelectorAll('.text-container > span ')
const hideMode = document.querySelector('.hden')
let ldMode = false;

dlMode.addEventListener('click', () => {
  ldMode = !ldMode;
  if(ldMode) {
    daliMode.classList.add('dark')
    tiMode.classList.add('dark')
    dlMode.classList.add('move-to-left')
    hideMode.classList.add('dark')
  } else {
    daliMode.classList.remove('dark')
    tiMode.classList.remove('dark')
    dlMode.classList.remove('move-to-left')
    hideMode.classList.remove('dark')
  }
})

for( let i = 0; i < txtMode.length; i++) {
  dlMode.addEventListener('click', function () {
    txtMode[i].classList.toggle('dark')
  })
}

// gsap animation

// gsap.to('.t1', {
//   repeat: -1, // -1 반복횟수 무한
//   yoyo: true, // 모션 반복 여부
//   y: 300,
//   ease: 'bounce.out',
//   duration: 2
// });

// let tl1 = gsap.timeline({
//   repeat:-1,
//   yoyo:true
// });
//   tl1.to('.t2', {
//     x: -700,
//     duration: 2
//   })

//   tl1.to('.t2', {
//     y: -400,
//     duration: 2
//   }, '+=.3')

//   tl1.to('.t2', {
//     x: 400,
//     duration: 2
//   }, '+=.3')


// gsap.to('.t3', {
//   repeat: -1, 
//   yoyo: true, 
//   y: -500,
//   ease: 'bounce.in',
//   duration: 2
// });

// let tl2 = gsap.timeline({
//   repeat:-1,
//   yoyo:true
// });
//   tl2.to('.t4', {
//     x: -400,
//     duration: 2
//   })

//   tl2.to('.t4', {
//     y: 400,
//     duration: 2
//   }, '+=.6')

//   tl2.to('.t4', {
//     x: 400,
//     duration: 2
//   }, '+=.2')


// let tl3 = gsap.timeline({
//   repeat:-1,
//   yoyo:true
// });
// tl3.to('.t5', {
//   x: 900,
//   duration: 2
// })
// tl3.to('.t5', {
//   y: -400,
//   duration: 2
// }, '+=.8')
// tl3.to('.t5', {
//   x: -200,
//   duration: 2
// }, '+=.2')
// tl3.to('.t5', {
//   y: 200,
//   duration: 2
// }, '+=.2')

// gsap.to('.t6', {
//   repeat: -1, 
//   yoyo: true, 
//   x: -400,
//   y: 400,
//   ease: 'rough',
//   duration: 2
// });

// let tl4 = gsap.timeline({
//   repeat:-1,
//   yoyo:true
// });
// tl4.to('.t7', {
//   x: -900,
//   duration: 2
// })
// tl4.to('.t7', {
//   x: 900,
//   duration: 2
// }, '+=.8')

// gsap.to('.t8', {
//   repeat: -1, 
//   yoyo: true, 
//   x: 1100,
//   y: -400,
//   ease: 'rough',
//   duration: 2
// });

// gsap.to('.t9', {
//   repeat: -1, 
//   yoyo: true, 
//   x: 1100,
//   y: 400,
//   ease: 'rough',
//   duration: 2
// });

// gsap animation 2
// myAnimation.play();
let tl0 = gsap.timeline({
  repeat: -1, // -1 반복횟수 무한
  yoyo: true // 모션 반복 여부
 });
 tl0.to('.t1', {
  y: 101,
  delay: 1,
  duration: 2
 })
 tl0.to('.t1', {
  x: 130,
  duration: 2
 })
 tl0.to('.t1', {
  delay: 20,
  duration: 2
 })

let tl1 = gsap.timeline({
  repeat:-1,
  yoyo:true
});
tl1.to('.t2', {
  x: -620,
  delay: 3,
  duration: 2
})
tl1.to('.t2', {
  y: -200,
  duration: 2
})
tl1.to('.t2', {
  delay: 18,
  duration: 2
})

let tl2 = gsap.timeline({
  repeat:-1,
  yoyo:true
});
tl2.to('.t3', {
  x: -230,
  delay: 5,
  duration: 2
})
tl2.to('.t3', {
  y: -315,
  duration: 2
})
tl2.to('.t3', {
  delay: 16,
  duration: 2
})

let tl3 = gsap.timeline({
  repeat:-1,
  yoyo:true
});
tl3.to('.t4', {
  y: 235,
  delay: 7,
  duration: 2
})
tl3.to('.t4', {
  x: 120,
  duration: 2
})
tl3.to('.t4', {
  delay: 14,
  duration: 2
})

let tl4 = gsap.timeline({
  repeat:-1,
  yoyo:true
});
tl4.to('.t5', {
  x: 520,
  delay: 9,
  duration: 2
})
tl4.to('.t5', {
  y: -216,
  duration: 2
})
tl4.to('.t5', {
  delay: 12,
  duration: 2
})

let tl5 = gsap.timeline({
  repeat:-1,
  yoyo:true
});
tl5.to('.t6', {
  x: -130,
  delay: 11,
  duration: 2
})
tl5.to('.t6', {
  y: 196,
  duration: 2
})
tl5.to('.t6', {
  delay: 10,
  duration: 2
})

let tl6 = gsap.timeline({
  repeat:-1,
  yoyo:true
});
tl6.to('.t7', {
  y: -95,
  delay: 13,
  duration: 2
})
tl6.to('.t7', {
  x: 225,
  duration: 2
})
tl6.to('.t7', {
  delay: 8,
  duration: 2
})

let tl7 = gsap.timeline({
  repeat:-1,
  yoyo:true
});
tl7.to('.t8', {
  x: 978,
  delay: 15,
  duration: 2
})
tl7.to('.t8', {
  y: -363,
  duration: 2
})
tl7.to('.t8', {
  delay: 6,
  duration: 2
})

let tl8 = gsap.timeline({
  repeat:-1,
  yoyo:true
});
tl8.to('.t9', {
  x: 1000,
  delay: 17,
  duration: 2
})
tl8.to('.t9', {
  y: 255,
  duration: 2
})
tl8.to('.t9', {
  delay: 4,
  duration: 2
})

let tl9 = gsap.timeline({
  repeat:-1,
  yoyo:true
});
tl9.to('.hden', {
  x: 500,
  duration: 1
})
tl9.to('.hden', {
  y: 250,
  duration: 1
})
tl9.to('.hden', {
  x: -500,
  duration: 1
})
tl9.to('.hden', {
  y: -250,
  duration: 1
})
tl9.to('.hden', {
  x: 600,
  duration: 1
})
tl9.to('.hden', {
  y: -600,
  duration: 1
})
