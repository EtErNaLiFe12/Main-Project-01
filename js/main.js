const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 10,
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
    delay : 1500,   // 시간 설정
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