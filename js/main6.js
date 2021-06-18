let advancedStaggeringAnimation = (function () {
const staggerContainerEl = document.querySelector('.stagger-container'); 
const staggeringEl = staggerContainerEl.querySelector('.basic-staggering'); 
const dotsFragment = document.createDocumentFragment(); // 메모리에 빈 DOM 노드 생성 
let grid = [8, 6]; // grid라는 변수를 통해 배열로 0번째 8과 1번째 6을 넣음
let numberOfElements = grid[0] * grid[1]; // grid 0번째 * 1번째 = 48
let animation;
let paused = true;
let cell = 140; // 위치 이동 값

for (let i = 0; i < numberOfElements; i++ ) { 
  let dotEl = document.createElement('div'); // for문을 통해 div요소를 생성
  dotEl.classList.add('el'); // 생성한 div요소에 'el' class를 추가
  dotsFragment.appendChild(dotEl); // appendChild를 통해 빈 DOM 노드의 자식 노드로 dotEl 즉 div에 클래스가 el인 요소.
}

staggeringEl.appendChild(dotsFragment); // basic-staggering 클래스의 자식 노드로 dotsFragment로 만듬.

let index = anime.random(0, numberOfElements - 1);
let nextIndex = 0;

anime.set(".basic-staggering .cursor", {
  translateX: anime.stagger(-cell, { grid: grid, from: index, axis: "x" }),
  translateY: anime.stagger(-cell, { grid: grid, from: index, axis: "y" }),
  translateZ: 0,
  scale: 1
});

function play() {
  paused = false;
  if (animation) {
    animation.pause();
  } 

  nextIndex = anime.random(0, numberOfElements - 1);
  animation = anime
    .timeline({
      easing: "easeInOutQuad",
      complete: play
    })
    .add({
      targets: ".basic-staggering .cursor",
      keyframes: [
        { scale: 0.75, duration: 120 },
        { scale: 2.5, duration: 220 },
        { scale: 1.5, duration: 450 }
      ],
      duration: 300
    })
    .add(
      {
        targets: ".basic-staggering .el",
        keyframes: [
          {
            translateX: anime.stagger("-5px", {
              grid: grid,
              from: index,
              axis: "x"
            }),
            translateY: anime.stagger("-5px", {
              grid: grid,
              from: index,
              axis: "y"
            }),
            duration: 100
          },
          {
            translateX: anime.stagger("2px", {
              grid: grid,
              from: index,
              axis: "x"
            }),
            translateY: anime.stagger("2px", {
              grid: grid,
              from: index,
              axis: "y"
            }),
            scale: anime.stagger([2.6, 1], { grid: grid, from: index }),
            duration: 225
          },
          {
            translateX: 0,
            translateY: 0,
            scale: 1,
            duration: 1200
          }
        ],
        delay: anime.stagger(100, { grid: grid, from: index })
      },
      30
    )
    .add(
      {
        targets: ".basic-staggering .cursor",
        translateX: {
          value: anime.stagger(-cell, {
            grid: grid,
            from: nextIndex,
            axis: "x"
          })
        },
        translateY: {
          value: anime.stagger(-cell, {
            grid: grid,
            from: nextIndex,
            axis: "y"
          })
        },
        scale: 1.5,
        easing: "cubicBezier(.075, .2, .165, 1)"
      },
      "-=800"
    );

  index = nextIndex; // nextIndex 값을 index로 넘기면서 cursor 위치와 dot의 시작점이 같게 만듬
}
play();
})();



    anime({
        targets: '.svg-container polyline',
        // strokeDashoffset 속성 값으로 from to 배열 [from, to]를 설정
        // from 값으로 anime.setDashoffset을, to 값으로 0을 설정
        strokeDashoffset: [ anime.setDashoffset, 0 ],
        easing: 'easeInOutCirc',
        duration: 1000,
        delay: anime.stagger(50, {start: 1000}),
        direction: 'alternate',
        loop: true,
      })

    anime({
        targets: '.svg-container2 path',
        strokeDashoffset: [ anime.setDashoffset, 0 ],
        easing: 'easeInOutQuad',
        duration: 1000,
        delay: anime.stagger(100, {start: 1000}),
        direction: 'alternate',
        loop: true,
      })

  





// anime({
//   targets: '.el',
//   loop: true,
//   direction: 'alternate', 
//   scale: [
//     {value: .1, easing: 'easeOutSine', duration: 500},
//     {value: .5, easing: 'easeInOutQuad', duration: 1200},
//   ],
//   delay: anime.stagger(150, {grid: [8, 6], from: 'center'})
// });