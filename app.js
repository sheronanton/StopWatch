let secondsText = document.getElementById("seconds");
let minutesText = document.getElementById("minutes");
let millisecondsText = document.getElementById("milliseconds");
const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnReset = document.querySelector(".btn-reset");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval = 0;

function timer() {
  milliseconds++;
  if (milliseconds < 10) {
    millisecondsText.innerHTML = "0" + milliseconds;
  } else {
    millisecondsText.innerHTML = milliseconds;
  }
  if (milliseconds == 100) {
    seconds++;
    milliseconds = 0;
    millisecondsText.innerHTML = "0" + milliseconds;
    if (seconds < 10) {
      secondsText.innerHTML = "0" + seconds;
    } else {
      secondsText.innerHTML = seconds;
    }
  }

  if (seconds == 60) {
    minutes++;
    seconds = 0;
    secondsText.innerHTML = "0" + seconds;
    if (minutes < 10) {
      minutesText.innerHTML = "0" + minutes;
    } else {
      minutesText.innerHTML = minutes;
    }
  }
}

//Add Event Listener
btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", resettimer);

//Functions
function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 10);
}

function stop() {
  clearInterval(interval);
  console.log(interval);
  interval = 0;
}

function reset() {
  stop();
  clearInterval(interval);
  milliseconds = "00";
  millisecondsText.innerHTML = milliseconds;
  seconds = "00";
  secondsText.innerHTML = seconds;
  minutes = "00";
  minutesText.innerHTML = minutes;
}

function resettimer() {
  reset();
  start();
}
