const canvas = document.getElementById('raindrop');
const ctx = canvas.getContext('2d');
const canvas1 = document.getElementById('cover');
const ctx1 = canvas1.getContext('2d');
const mc = document.querySelector('.main-container');
const ctSide = document.querySelector('.ct-side');


let wi = 400;
let he = 400;

let raindp = [];
let raindp1 = [];

let raindpNum = 80;
let raindpNum1 = 80;




window.onload = function () {

let rd = new Image();
let rd1 = new Image();
rd.src = "./images/raindrop.png";
rd1.src = "./images/raindrop.png";

class rain {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.power = Math.random()*3+60;
    this.directionX = this.power * Math.random()*3+10;
    this.directionY = this.power * Math.random(150);
  }
  update() {
    this.y += this.directionY; 

    if (this.y + this.directionY > canvas.height) {
      this.y = 0;
      this.x += 200;
    }
    if (this.x + this.directionX > canvas.width) {
      this.x = 0;
    }
  }
  draw() {
    ctx.drawImage(rd, this.x, this.y, wi, he);
  }
}

class rain1 {
  constructor(xx,yy) {
    this.xx = xx;
    this.yy = yy;
    this.power = Math.random()*3+20;
    this.directionXX = this.power * Math.random()*3+10;
    this.directionYY = this.power * Math.random(150);
  }
  update() {
    this.yy += this.directionYY; 

    if (this.yy + this.directionYY > canvas.height) {
      this.yy = 0;
      this.xx += 350;
    }
    if (this.xx + this.directionXX > canvas.width) {
      this.xx = 0;
    }
  }
  draw() {
    ctx.drawImage(rd1, this.xx, this.yy, wi, he);
  }
}

function init() {
  for(let i = 0; i < raindpNum; i++) {
    raindp[i] = new rain(0, -100);
  }
  for(let i = 0; i < raindpNum1; i++) {
    raindp1[i] = new rain1(200, -100);
  }
}

function animate() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx1.clearRect(0,0,canvas.width, canvas.height);

  for(let i = 0; i < raindpNum; i++) {
    raindp[i].update();
    raindp[i].draw();
  }
  for(let i = 0; i < raindpNum1; i++) {
    raindp1[i].update();
    raindp1[i].draw();
  }
  window.addEventListener('resize', function() { // 화면 크기가 변하면 캔버스 크기도 변경해줌
    canvas.width=window.innerWidth - 10;
    canvas.height=window.innerHeight - 10;
    
  })

    const start = requestAnimationFrame(animate);

    canvas.addEventListener('click', function () {
      cancelAnimationFrame(start);
      canvas.style.display = "none";
      canvas1.classList.add('cover');
      mc.style.display = "block";
      ctSide.style.display = "flex";
    })

}

init();
animate();

} 

let wt = 40;
let ht = 40;

let stardp = [];
let stardpNum = 100;


let sd = new Image();
sd.src = "./images/star3.png";

class star {
  constructor(xs,ys) {
    this.xs = xs;
    this.ys = ys;
    this.angle = (Math.random()*(Math.PI*2));
    this.power = Math.random()*3+5;
    this.directionXs = this.power * Math.random()*3+2;
    this.directionYs = this.power * Math.random(this.angle);

 
  }
  condition() {
    this.xs +=  this.directionXs;
    this.ys +=  this.directionYs;

    if(this.xs + this.directionXs > canvas1.width) {
      this.xs = 0;
    }
    if(this.ys + this.directionYs > canvas1.height) {
      this.ys = 0;
    }


  }
  drawing() {
    ctx1.drawImage(sd, this.xs, this.ys, wt, ht);
  }
}

function into() {
  for(let i = 0; i < stardpNum; i++) {
    stardp[i] = new star(-200, 0);
  }
}

function animation() {
  ctx1.clearRect(0,0,canvas1.width, canvas1.height);

  for(let i = 0; i < stardpNum; i++) {
    stardp[i].condition();
    stardp[i].drawing();
  }

  window.addEventListener('resize', function() { // 화면 크기가 변하면 캔버스 크기도 변경해줌
    canvas1.width=window.innerWidth;
    canvas1.height=window.innerHeight;
  })

  requestAnimationFrame(animation);


}

into();
animation();


const midCon = document.querySelector('.mid-container');
const midleft = document.querySelector('.mid-l');
const midRight = document.querySelector('.mid-r');

midCon.addEventListener('click', () => {
  midCon.classList.toggle('turn');
  midleft.classList.toggle('turn');
  midRight.classList.toggle('turn');
})

