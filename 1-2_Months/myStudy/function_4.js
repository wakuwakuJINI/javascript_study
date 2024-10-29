
// * 즉시실행함수

// 정의되자마자 바로 실행하는 함수
// 함수는 정의되는 즉시 실행되며 다시 호출할 수 없다.
//즉시 실행함수의 기본형

(function () {
  console.log("바로실행");
})();

//화살표함수로 작성
(() => {
  console.log("화살표 함수 시행");
})();

//매개변수를 가진 함수
(function (name) {
  console.log(`안녕하세요 ${name}씨`);
})("서유진");

(function (x, y) {
  console.log(`${x + y}`);
})(2, 5);

//반환값을 가지는 즉시실행함수
let multiply = (function (a, b) {
  return a * b;
})(4, 3);
console.log(multiply);
//1.hello world 출력함수
(function () {
  console.log("hello world");
})();

//2.두 개의 숫자를 인자로 받아 합을 반환하고 결과를 콘솔에 출력하는 함수
let sum = (function (x, y) {
  console.log(x + y);
})(3, 7);

//3.주어진 배열의 모든 요소를 제곱한 결과를 새로운 배열로 반환하는 함수
const newArray = (function (Array_1) {
  const Array = [];
  for (i = 0; i < Array_1.length; i++) {
    // for(const item of Array_1){
    Array.push(Array_1[i] ** 2); // Array.push(item ** 2);
  }
  return Array;
})([2, 3, 4]);

console.log(newArray);