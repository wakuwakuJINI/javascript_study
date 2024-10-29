//3,5 2,1
const numbers = prompt("숫자를 입력해주세요").split(","); //numbers =["3","5"];
//const numbers = ["3", "5"];
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = Number(numbers[i]);
  //console.log(typeof numbers[i]);
}

//div#num1에 입력받은 숫자를 넣기
//<div id="num1"></div>
//innerText - div태그안에 text를 넣는다
document.getElementById("num1").innerText = numbers[0];
document.getElementById("num2").innerText = numbers[1];

//더하기함수
function add(num1, num2) {
  return num1 + num2;
}
//빼기 함수
const subtract = (num1, num2) => num1 - num2;
//곱하기 함수
const multiply = (num1, num2) => num1 * num2;
//나누기 함수
const divide = function (num1, num2) {
  if (num2 === 0) {
    return "0으로 나눌 수 없습니다";
  } else {
    return num1 / num2;
  }
};

function displayResult(result) {
  //result => 계산한 결과값
  //<div id="result">결과:</div>
  document.getElementById("result").innerText = "결과" + result;
}

//이벤트 리스너
//1. 더하기 버튼을 눌렀을때 이벤트 발생
//<button id="addBtn">더하기</button>
document.getElementById("addBtn").addEventListener("click", function () {
  displayResult(add(numbers[0], numbers[1]));
});
document.getElementById("subtractBtn").addEventListener("click", function () {
  displayResult(subtract(numbers[0], numbers[1]));
});
document.getElementById("multiplyBtn").addEventListener("click", function () {
  displayResult(multiply(numbers[0], numbers[1]));
});
document.getElementById("divideBtn").addEventListener("click", function () {
  displayResult(divide(numbers[0], numbers[1]));
});
