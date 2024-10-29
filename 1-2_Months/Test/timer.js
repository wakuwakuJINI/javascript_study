const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const startBtnElement = document.getElementById("startBtn");
const pauseBtn = document.getElementById("stopBtn");
const timerElement = document.getElementById("timer");

let timeId = null;
let minute = 0;
let second = 0;


startBtn.addEventListener("click", () => {
  //분,초 둘다 값이 공백일때 경고창 띄우기
  clearInterval(timeId);
  if (minuteElement.vlaue === "" && secondElement.value === "") {
    alert("시간을 입력해주세요");
    return;
  }

  //문자열 분 값을 숫자로 변환
  //분 값이 공백이면 숫자 0을 넣어줌
  minute = parseInt(minuteElement.value === "" ? 0 : minuteElement.value);
  second = parseInt(secondElement.value === "" ? 0 : secondElement.value);
  timeId = setInterval(() => {
    if (minute === 0 && second === 0) {
      clearInterval(timeId);
      alert("타이머종료");
      return;
    }
    //초가 0일때 분 값을 1 감소시키고 -> 초를 59초로 변경
    if (second === 0) {
      minute--;
      second = 59;
    } else {
      second--;
    }

    //숫자가 10보다 작을때 앞글자에 '0'을 붙임
    let showMinute = minute.padString(2,"0")
    let showSecond = second.padString(2,"0")
    //timer(p태그)에 시간값 넣기
    timer.textContent = `${showMinute}:${showSecond}`;
  }, 1000);
});
  stopBtn.addEventListener("click", () => {
  clearInterval(timeId);
  alert("일시정지");
});


// ======================================


// function convertToSeconds(hours, minutes, seconds) {
//     return (hours * 3600) + (minutes * 60) + seconds;
// }

// function displayTime(totalSeconds) {
//     const hours = Math.floor(totalSeconds / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;

//     document.getElementById('timerDisplay').textContent =
//         `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
// }

// function pad(number) {
//     return number.toString().padStart(2, '0');
// }