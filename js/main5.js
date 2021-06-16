// ctx.beginPath();
// // ctx.rect(50, 50, 70, 70); // (좌측 위측 폭 높이)
// ctx.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "#fb5849";
// ctx.fill();
// ctx.closePath();

const appendTens = document.getElementById("tenMillis");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
let intervalId;

// javascript에서 참조할수 있도록 getElementById를 통해 myCanvas라는 id값을 
// 참조해준뒤 캔버스에 그리기위해 getContext 속성을 이용
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// 매 프레임마다 공의 x와 y좌표에 더해줄 수
var dx = 8; 
var dy = -8;

var rightPressed = false;
var leftPressed = false;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            swal({
              title: "COMPLETE!!",
              text: "You can go to next step",
              icon: "success",
              buttons: true,
              closeOnClickOutside: false,
              closeOnEsc: true,
            }).then(() => {
              location.href = "http://127.0.0.1:5507/index-7.html" ;
            });
          }
        }
      }
    }
  }
}


// score drawing
var score = 0;
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#fb5849";
  ctx.fillText("Score: " + score, 8, 20);
}
// lives drawing
var lives = 5;
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#fb5849";
  ctx.fillText("Lives: " + lives, canvas.width - 70, 20); //text, 캔버스 너비값 - 65에 위치(x값), 상단에서 20 아래로(y값)
}

// Ball drawing
var ballRadius = 15;
var x = canvas.width / 2;
var y = canvas.height - 30;
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2); //원의 중심을가리키는 x와 y좌표(시작지점), 원의 반지름, 시작각도와 끝 각도, 그리는 방향(옵션임)
  ctx.fillStyle = "#fb5849";
  ctx.fill();
  ctx.closePath();
}

//Paddle drawing
var paddleHeight = 15;
var paddleWidth = 400;
var paddleX = (canvas.width - paddleWidth) / 2;
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight); // 좌측 위측 폭 높이
  ctx.fillStyle = "#fb5849";
  ctx.fill();
  ctx.closePath();
}

//Stop Watch drawing
var tenMillis = 0;
var seconds = 0;
var minutes = 0;
appendTens.textContent = "00"
appendSeconds.textContent = "00"
appendMinutes.textContent = "00"
function drawTime() {
  ctx.font = "24px Arial";
  ctx.fillStyle = "#fb5849";
  ctx.fillText("STOP-WATCH: " + appendMinutes.textContent + ":" + appendSeconds.textContent + ":" + appendTens.textContent , 380 , 300);
}

window.onload = function(){
  clearInterval(intervalId)
  intervalId = setInterval(operateTimer, 10)
}

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

// Bricks drawing
var brickRowCount = 11;
var brickColumnCount = 4;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = {
      x: 0,
      y: 0,
      status: 1
    };
  }
}

function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight); // 좌측 위측 폭 높이
        ctx.fillStyle = "#fb5849";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 위치 이동 전 그림이 남지 않게 좌상단모서리를 표시하는 x와 y 좌표, 직사각형의 우하단 모서리를 표시할 x와 y좌표.
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  drawTime();
  collisionDetection();

  if(minutes === 1 && seconds === 30 ) {
    minutes = 0;
    swal({  // Sweetalert.js 팝업창 
      title:"Time over",
      text: "시간 초과!! " + "게임이 reset 됩니다.",
      icon: "warning",
      buttons: {
        confirm: {
          text:"OK",
          closeModal: true,
          visible: true,
        }
      },
      closeOnClickOutside: false,
      closeOnEsc: false,
    }).then(function() {
        location.reload(); // 새로고침
    });
  }
  
  
  // 캔버스는 좌상단 기준 - 좌상단의 값은 0임.
  // x에 dx값을 더한 값이 캔버스의 가로 너비 - 공의 반지름을 뺀 값보다 클 경우 || x에 dx값을 더한 값이 공의 반지름값보다 작을 경우 방향 변경
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) { 
    dx = -dx;
  }

  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {

      if (x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
      } else {
        lives--;
        if (!lives) {
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
        } else {
          x = canvas.width / 2;
          y = canvas.height - 30;
          dx = 8;
          dy = -8;
          paddleX = (canvas.width - paddleWidth) / 2;
        }
      }
  }


  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 5;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 5;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

draw(); // setInterval 함수로 draw() 10ms 마다 실행함)

