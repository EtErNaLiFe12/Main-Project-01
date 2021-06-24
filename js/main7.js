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


// for(let i = 0; i < 2; i++) {
//   for(let j = 0; j < 3; j++) {
//     ctx.drawImage(p_bubble,i*x,j*y,150,150);
//   }
// }
// const pinkBub = document.querySelectorAll('.pinkbub');
// const blueBub = document.querySelectorAll('.bluebub');

//----------------------------------------------------------------------

//캔버스 객체 생성
/*
window.onload = function () {

const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');

// 매 프레임마다 이동할 위치 값
let sx = 2; 
let sy = -2;
let dx = 4;
let dy = -2;
let ex = 1;
let ey = -2;

//pink버블의 x, y 좌표
let x = 300;
let y = 600;
let xx = 100;
let yy = 300;
let xxx = 20;
let yyy = 100;

// 버블의 width, height 값
let bubwi = 200;
let bubhe = 200;

bubbles=[];
bubbleNum = 10;
 
function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(p_bubble,x,y,bubwi,bubhe);
  ctx.drawImage(p_bubble1,xx,yy,bubwi,bubhe);
  ctx.drawImage(p_bubble1,xxx,yyy,bubwi,bubhe);
  window.addEventListener('resize',function(){ // 화면 크기가 변하면 캔버스 크기도 변경해줌
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
  })
}

function move() {
  x += sx;
  y += sy;
  xx += dx;
  yy += dy;
  xxx += ex;
  yyy += ey;

  if (x + sx > canvas.width - bubwi || x + sx < 0 ) {
    sx = -sx;
  }
  if (y + sy < 0 || y + sy > canvas.height - bubhe ) {
    sy = -sy;
  }
  if (xx + dx > canvas.width - bubwi + 30 || xx + dx < 0 - 20) {
    dx = -dx;
  }
  if (yy + dy < -30 || yy + dy > canvas.height - bubhe + 30) {
    dy = -dy;
  }
  if (xxx + ex > canvas.width - bubwi + 30 || xxx + ex < 0 - 20) {
    ex = -ex;
  }
  if (yyy + ey < -30 || yyy + ey > canvas.height - bubhe + 30) {
    ey = -ey;
  }
}

// 이미지 객체 생성
let p_bubble = new Image();
let p_bubble1 = new Image();
let p_bubble2 = new Image();

// 생성 객체의 이미지 위치 지정
p_bubble.src="./images/pinkbubble.png";
p_bubble1.src="./images/bluebubble.png";
p_bubble2.src="./images/bluebubble.png";

function running() {
  move();
  draw();  
}

running();

setInterval(running, 5);

}

*/

// -----------------------------------------------------------------------------

/*
window.onload = function () {
  const canvas = document.getElementById('bubbleCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth-10;
  canvas.height = window.innerHeight-10;

  class Bubble {
    constructor(x,y) { // ball의 기본 속성들을 정의 
      this.x = x;
      this.y = y;
      this.c = 'rgba('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+')'; // 공의 색깔을 random으로 설정
      this.size = 5+Math.random()*20;
      this.angle = (Math.random()*(Math.PI*2));
      this.power = Math.random()*3+2;
      this.directionX = this.power * Math.cos(this.angle);
      this.directionY = this.power * Math.sin(this.angle);
    }
    update(){ // 프레임마다 속성들을 변화시킴 
      this.y += this.directionY; 
      this.x += this.directionX;
      if(this.y+this.size>canvas.height || this.y-this.size<0){ // 바운드 처리
        this.directionY *= -1;
        }
      if(this.x>canvas.width-this.size ) {
        this.x = canvas.width-this.size;
        this.directionX *= -1;
      } else if (this.x-this.size < 0){
        this.directionX *= -1;
      }
    }
    draw(){ // 넘어온 속성값대로 캔버스에 그림을 그려줌
       ctx.fillStyle= this.c;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, true);
          ctx.closePath();
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle= 'black';
          ctx.stroke();
    }
  }

  function init(){ // 공의 갯수만큼 공의 객체 생성
    for(i=0;i<ballNumber;i++){
      balls[i] = new Bubble(canvas.width*0.5, canvas.height*0.5);
    }
  }

function animate(){ // 매 프레임마다 벌어지는 일들
  ctx.fillStyle='rgba(255,255,255,.8)'; // 전체 화면 지우기. 하얀색의 alpha값을 변경함에 따라 공의 잔상이 달라진다.
  ctx.fillRect(0,0,canvas.width,canvas.height);
  for(i=0;i<ballNumber;i++){
    balls[i].update();
    balls[i].draw();
  }
  window.addEventListener('resize',function(){ // 화면 크기가 변하면 캔버스 크기도 변경해줌
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
  })
  requestAnimationFrame(animate);
}
  init();
  animate();
}
*/

//-------------------------------------------------------------------------------------

/*
window.onload = function () {

  const canvas = document.getElementById('bubbleCanvas');
  const ctx = canvas.getContext('2d');
  let angle = (Math.random()*(Math.PI*2)*2);
  let power = Math.random()*3+4;
  let directionX = power * Math.cos(angle) * 1.5;
  let directionY = power * Math.sin(angle) * -2.5;

  // 매 프레임마다 이동할 위치 값
  let sx = directionX;
  let sy = directionY;
  let dx = 4;
  let dy = -2;
  let ex = 1;
  let ey = -2;
  
  //pink버블의 x, y 좌표
  let x = 300;
  let y = 600;
  let xx = 100;
  let yy = 300;
  let xxx = 20;
  let yyy = 100;
  
  // 버블의 width, height 값
  let bubwi = 200;
  let bubhe = 200;
  
  bubbles=[];
  bubbleNum = 10;
   
  function draw() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(p_bubble,x,y,bubwi,bubhe);
    ctx.drawImage(p_bubble1,xx,yy,bubwi,bubhe);
    ctx.drawImage(p_bubble1,xxx,yyy,bubwi,bubhe);
    window.addEventListener('resize',function(){ // 화면 크기가 변하면 캔버스 크기도 변경해줌
      canvas.width=window.innerWidth;
      canvas.height=window.innerHeight;
    })
  }
  
  function move() {
    x += sx;
    y += sy;
    xx += dx;
    yy += dy;
    xxx += ex;
    yyy += ey;
  
    if (x + sx > canvas.width - bubwi || x + sx < 0 ) {
      sx = -sx;
    }
    if (y + sy < 0 || y + sy > canvas.height - bubhe ) {
      sy = -sy;
    }
    if (xx + dx > canvas.width - bubwi + 30 || xx + dx < 0 - 20) {
      dx = -dx;
    }
    if (yy + dy < -30 || yy + dy > canvas.height - bubhe + 30) {
      dy = -dy;
    }
    if (xxx + ex > canvas.width - bubwi + 30 || xxx + ex < 0 - 20) {
      ex = -ex;
    }
    if (yyy + ey < -30 || yyy + ey > canvas.height - bubhe + 30) {
      ey = -ey;
    }
  }
  
  // 이미지 객체 생성
  let p_bubble = new Image();
  let p_bubble1 = new Image();
  let p_bubble2 = new Image();
  
  // 생성 객체의 이미지 위치 지정
  p_bubble.src="./images/pinkbubble.png";
  p_bubble1.src="./images/bluebubble.png";
  p_bubble2.src="./images/bluebubble.png";
  
  function running() {
    move();
    draw();  
  }
  
  
  setInterval(running, 5);
  
  }
*/

//--------------------------------------------------------------------------

window.onload = function () {
  const canvas = document.getElementById('bubbleCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth-10;
  canvas.height = window.innerHeight-10;
  bubbles=[];
  bubbleNumber = 100;
  let pb = new Image();
  pb.src="./images/pinkbubble.png";
 

  class Bubble {
    constructor(x,y) { // ball의 기본 속성들을 정의 
      this.x = x;
      this.y = y;
      // this.c = ctx.createPattern(pb, 'repeat');
      // this.c = 'rgba('+Math.random()*255+','+Math.random()*255+','+Math.random()*255+')'; // 공의 색깔을 random으로 설정
      this.size = 30 + Math.random()*20;
      this.angle = (Math.random()*(Math.PI*2));
      this.power = Math.random()*3+4;
      this.directionX = this.power * Math.cos(this.angle);
      this.directionY = this.power * Math.sin(this.angle);
   
      
    }
    update(){ // 프레임마다 속성들을 변화시킴 
      this.x += this.directionX;
      this.y += this.directionY; 
      if(this.y + this.size + 120 > canvas.height || this.y - this.size < -30){ // 바운드 처리
        this.directionY *= -1;
        }
      if(this.x + 100 > canvas.width-this.size ) {
        // this.x = canvas.width-this.size - 130;
        this.directionX *= -1;
      } else if (this.x - this.size < -40){
        this.directionX *= -1;
      }
    }
    draw(){ // 넘어온 속성값대로 캔버스에 그림을 그려줌
      ctx.drawImage(pb,this.x,this.y,150,150);
          // ctx.fillStyle = this.c;
          // ctx.beginPath();
          // ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, true);
          // ctx.closePath();
          // ctx.fill();
    }
  }

  function init(){ // 공의 갯수만큼 공의 객체 생성
    for(i=0;i<bubbleNumber;i++){
      bubbles[i] = new Bubble(canvas.width*0.4, canvas.height*0.5);
    }
  }

function animate(){ // 매 프레임마다 벌어지는 일들
  ctx.fillStyle='rgba(255,255,255,1)'; // 전체 화면 지우기. 하얀색의 alpha값을 변경함에 따라 공의 잔상이 달라진다.
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(i=0;i<bubbleNumber;i++){
    bubbles[i].update();
    bubbles[i].draw();
  }
  window.addEventListener('resize',function(){ // 화면 크기가 변하면 캔버스 크기도 변경해줌
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
  })
  requestAnimationFrame(animate);
}

  init();
  animate();

}
