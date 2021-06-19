# SIDE PROJECT#01

## SUMMARY

- 이 SIDE PROJECT는 미니게임식으로 hidden-page#1 부터 #10까지 이동하며 진행하는 방식입니다.

- 각 hidden-page 별로 html+css+js를 이용하여 각각의 다른 간단한 기능들을 구현을 하였습니다.   
  (node.js를 사용하지 않아 npm으로 package를 install하지 않고 CDN을 가져오는 방식으로 하였습니다.)

- hidden-page#10 까지 구성 예정입니다.


## HIDDEN-PAGE별 소개
---
### HIDDEN-PAGE#1
  - Animation CSS 사용(CDN Linked) - hidden-page#2 동일
  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  ```
  - JS 이벤트 리스너를 통해 classList로 click시 클래스를 추가 및 해제 하여 스타일 변경
  - STOP-WATCH 추가 - 페이지 로딩 후에 스크립트 실행을 위해 window.onload를 사용하여 페이지 로딩 후  
  자동 실행 되도록 하였고 기존 start / stop 버튼은 삭제하고 reset 버튼에는 a 태그로 묶어 클릭시  
  현 페이지로 이동 하므로써 RESET 기능을 사용하도록 하였습니다. (SLIDE-SHOW#2~3번 동일)

  ```js 
  // 코드 앞단 - window.onload로 페이지 로딩 후에 스크립트 실행을 시킴
    window.onload = function(){
      clearInterval(intervalId)
      intervalId = setInterval(operateTimer, 10)
    }
  ```
  ---
### HIDDEN-PAGE#2
  - Swiper.js를 이용하여 slide 구현(CDN Linked)
  ```html
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
  ```
  ---
### HIDDEN-PAGE#3

 - CARD FLIP - toggle을 통해 지정된('clicked')가 없을 시 추가 해주고 있을 시엔 해제 해줌. 
 ```js
  const flipEl = document.querySelectorAll('.card')

  for( i = 0; i < flipEl.length; i++ ) {
    flipEl[i].addEventListener ('click', function () {
          this.classList.toggle('clicked')
      })
  }
 ```
 ---
### HIDDEN-PAGE#4

  - Input 태그의 checkbox를 통해 클릭시 side-bar 보이기 및 재 클릭시 side-bar 사라지게 함.  
     
  ``` html
  <!-- input 태그와 label 태그의 연결 방법 - input의 id 값과 label의 for의 값을 일치 시킴. -->
    <input type="checkbox" id=menuicon >
    <label for="menuicon" class="menubtn">
  ```
  ---
  ### HIDDEN-PAGE#5

  - 전체 화면을 반전시켜 클릭시 dark-mode 및 light-mode 전환
  ```js
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
  ```
  - dark-mode 상태에서의 내용들에 easing function 적용 (CDN LINKED)

  ```html
  <!-- CDN -->
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
  ```
  ```js
  // span class="t1"~"t9" 에 각각 gsap.js에 애니메이션 추가
    let t1 = gsap.timeline({
    repeat:-1,
    // yoyo:true
    });
    t1.to('.square', {
      x: 950,
      duration: 0.8
    })
    t1.to('.square', {
      y: 650,
      duration: 0.8
    })
    t1.to('.square', {
      x: 0,
      duration: 0.8
    })
    t1.to('.square', {
      y: 0,
      duration: 0.8
    })

  ```
  ---
  ### HIDDEN-PAGE#6

  - tab 형식으로 각 tab 클릭시 내부 내용을 바꿈.
  - tab 구현은 input 태그의 radio 속성을 이용.
  ```html
     <input type="radio" name="#tab" id="tab-1" checked>
      <label for="tab-1">1</label>

      <input type="radio" name="#tab" id="tab-2">
      <label for="tab-2">2</label>

      <input type="radio" name="#tab" id="tab-3">
      <label for="tab-3">3</label>

      <input type="radio" name="#tab" id="tab-4">
      <label for="tab-4">4</label>
  ```
  - @keyframes를 활용하여 css 애니메이션 추가
  ```css
  .clock:after {
    animation: rotateEl 2s linear infinite;
  }
    @keyframes rotateEl {
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
  }
  ```
  - animation 속성에 keyframes에 사용한 이름을 같이 사용하므로써 시간, 움직임, 횟수 등을 지정 할 수 있다.
  ---
  ### HIDDEN-PAGE#7

  - 미니게임 추가 (벽돌깨기) - MDN 참고  
    MDN Web Doc : https://developer.mozilla.org/ko/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript
  - 벽돌깨기 게임에 STOP-WATCH를 추가하여 시간 제한을 둠.
    (1분30초 후 시간 초과 Alert창 pop-up)
  - Alert창은 sweetalert.js를 사용 (CDN 참고)
  ```html
  <!-- CDN -->
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  ```
  ```js
  // sweetalert.js (외부 라이브러리 사용)
   swal({ 
            title: "The End",
            text: "GAME OVER!!!",
            icon: "error",
            buttons: ["CANCEL", "OK"],
            closeOnClickOutside: false,
            closeOnEsc: true,
          }).then(() => {
            location.reload();
          });
  ```
  - Game complete시 뜨는 alert창에서 confirm을 하면 다음 페이지로 이동하도록 함.
  ---  
  ### HIDDEN-PAGE#8

  - anime.js를 통한 javascript 기반 애니메이션 
  ```html
    <script defer src="anime.min.js"></script>
  ```
  - STAGGERING
  - 라인드로잉(SVG 파일)
  

