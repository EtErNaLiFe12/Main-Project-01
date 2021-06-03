const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 200,
  loop: true,
  mousewheel: true,
  

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type : 'bullets', // 버튼 모양 결정 "bullets", "fraction" 
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },

  autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
    delay : 1100,   // 시간 설정
    disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },

  //방향표
  navigation: {
    //다음페이지 설정
    nextEl: '.swiper-button-next',
    //이전페이지 설정
    prevEl: '.swiper-button-prev',
  },

});

// STOP-WATCH

let minutes = 0;
let seconds = 0;
let tenMillis = 0;
const appendTens = document.getElementById("tenMillis");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const buttonStart = document.getElementById("bt__start");
const buttonStop = document.getElementById("bt__stop");
const buttonReset = document.getElementById("bt__reset");
let intervalId;
 
window.onload = function(){
  clearInterval(intervalId)
  intervalId = setInterval(operateTimer, 10)
}
 
buttonStop.onclick = function(){
  clearInterval(intervalId)
}
 
buttonReset.onclick = function(){
  clearInterval(intervalId)
  tenMillis = 0; seconds = 0; minutes = 0;
  appendTens.textContent = "00"
  appendSeconds.textContent = "00"
  appendMinutes.textContent = "00"
}
 
// 10ms 마다 시간에 대한 숫자가 증가한다!
function operateTimer(){
  tenMillis++;
  appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis
  if(tenMillis > 99){
    seconds++;
    appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds
    tenMillis = 0
    appendTens.textContent = "00"
  }
  if(seconds > 59){
    minutes++;
    appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes
    seconds = 0
    appendSeconds.textContent = "00"    
  }
}