const animationEl = document.querySelector('.inner .content span')

let clicked = false;

animationEl.addEventListener ('click', function () {
  clicked = !clicked;
  if(clicked) {
      console.log('log 기록 되고 있습니다.')
      this.classList.add('clicked')
  } else {
        this.classList.remove('clicked')
      }
    }) 

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