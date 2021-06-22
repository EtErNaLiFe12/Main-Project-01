// const pinkBub = document.getElementById('pinkbub');
// const blueBub = document.getElementById('bluebub');

// bubble 그리기

// function drawBubble() {
  
//   // 이미지 객체 생성
//   let p_bubble = new Image();
//   let b_bubble = new Image();

//   b_bubble.addEventListener('load', function() {
//     let ctx = document.getElementById('bubbleCanvas').getContext('2d');
//     ctx.drawImage(b_bubble,100,200,200,200);
//   }, false);

//   b_bubble.src="./images/bluebubble.png";

//   // 페이지 로드후 이미지가 로드 되었을 때 이미지 출력
//   p_bubble.addEventListener('load', function () {
//     //load된 이미지를 캔버스에 출력
//     let ctx =document.getElementById('bubbleCanvas').getContext('2d');
//     //canvas.drawImage() 함수를 사용하여 이미지 출력
//     //drawImage(image sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
//     ctx.drawImage( p_bubble,0,0,150,150);
//   }, false);

//   p_bubble.src="./images/pinkbubble.png";
// }

// drawBubble();

const pinkBub = document.querySelectorAll('.pinkbub');
const blueBub = document.querySelectorAll('.bluebub');
let ctx = document.getElementById('bubbleCanvas').getContext('2d');
var dx = 8; 
var dy = -8;
function drawBubble() {

    let p_bubble = new Image();
    let p_bubble1 = new Image();

      p_bubble.addEventListener('load', function () {
        
        for(let i = 0; i < 2; i++) {
          for(let j = 0; j < 3; j++) {
            ctx.drawImage(p_bubble,j*160,i*160,150,150);
          }
        }
      }, false);
      p_bubble.src="./images/pinkbubble.png";
      p_bubble1.src="./images/bluebubble.png";
  }
  
  drawBubble();
