# SIDE PROJECT

## SUMMARY

- 이 SIDE PROJECT는 미니게임식으로 #1 부터 진행되며 다음페이지로 넘어가기위해
  숨겨진 버튼이나 일정 부분 클릭으로 이동을 합니다.

- 각 hidden-page 별로 html+css+js를 이용하여 각각의 다른 간단한 기능들을 구현을 
  하였습니다.

- 현재는 hidden-page#4 까지 이며 hidden-page#10 까지 구성 예정입니다.

- 추후 이 side project에서 사용한 기능들은 참고용으로 사용하기 위함 입니다.

## HIDDEN-PAGE별 소개
---
### HIDDEN-PAGE#1
  1. Animation CSS 사용(CDN Linked) - hidden-page#2 동일
  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  ```
  1. JS 이벤트 리스너를 통해 classList로 click시 클래스를 추가 및 해제 하여 스타일 변경
  1. STOP-WATCH 추가 - 페이지 로딩 후에 스크립트 실행을 위해 window.onload를 사용하여 페이지 로딩 후  
  자동 실행 되도록 하였고  기존 start / stop 버튼은 삭제하고 reset 버튼에는 a 태그로 묶어 클릭시 현 페이지로 이동 하므로써  
  RESET 기능을 사용하도록 하였습니다. (SLIDE-SHOW#2~3번 동일)

  ```js 
  // 코드 앞단 - window.onload로 페이지 로딩 후에 스크립트 실행을 시킴
    window.onload = function(){
      clearInterval(intervalId)
      intervalId = setInterval(operateTimer, 10)
    }
  ```
### HIDDEN-PAGE#2
  1. Swiper.js를 이용하여 slide 구현(CDN Linked)
  ```html
  <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
  <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
  ```
### HIDDEN-PAGE#3

 1. CARD FLIP - toggle을 통해 지정된('clicked')가 없을 시 추가 해주고 있을 시엔 해제 해줌. 
 ```js
  const flipEl = document.querySelectorAll('.card')

  let clicked = false;

  for( i = 0; i < flipEl.length; i++ ) {
    flipEl[i].addEventListener ('click', function () {
          this.classList.toggle('clicked')
      })
  }
 ```
### HIDDEN-PAGE#4

  1. Input 태그의 checkbox를 통해 클릭시 side-bar 보이기 및 재 클릭시 side-bar 사라지게 함.  
     (input 태그와 label 태그의 연결 방법 - input의 id 값과 label의 for의 값을 일치 시킴.)
  ``` html
    <input type="checkbox" id=menuicon >
    <label for="menuicon" class="menubtn">
  ```
   