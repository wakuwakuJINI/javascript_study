
// *스코프(scope) - 유효범위
// 변수나 함수는 자신이 선언된 위치에 의해 사용할수 있는 유효범위가 정해진다


// 1)전역스코프(global scope)
// : 코드의 가장 바깥영역을 의미한다
// : 전역에서 변수를 선언하면 변수는 전역스코프를 가지게된다
// : 전역변수는 어디서든지 참조가 가능.

var numberone = 10;
if (true) {
  console.log(numberone);
}
function levelOne() {
  console.log(numberone);
}
levelOne();
console.log("--------------------");


// 2)지역스코프(local scope)
// : 지역 : 함수 몸체 내부
// : 지역에서 변수를 선언하게 되면 지역스코프를 갖는 지역변수가 된다
// : 지역변수는 자신이 선언된 지역과 하위지역에서만 참조가능
// */
var numberOne = 10;
function levelOne() {
  var numberOne = 40;
  console.log("level One" + numberOne);

  function levelTwo() {
    console.log("level Two" + numberOne);
  }
  levelTwo();
}
levelOne();
console.log(numberOne);
console.log("--------------------");

// let array = [1, 2, 3];
// let i = 999;
// for (const item of array) {
//   console.log(item);
// }

// //for (let i = 0; i < 10; i++) {
// //console.log("for :: " + i);
// //}

// //console.log(i);
// console.log(item);


//1.
var globalVar = "전역변수";
function checkGlobalScope() {
  console.log(globalVar);
}
checkGlobalScope();
console.log(globalVar);

//2.
function checkFunctionScope() {
  var scopeVar = "지역변수";
  console.log(scopeVar);
}
checkFunctionScope();
// console.log(scopeVar);

//3.
var number = 10;
function levelOne() {
  var number = 20;
  console.log("levelOne :" + number);
  levelTwo();
}
function levelTwo() {
  console.log("levelTwo :" + number);
}
levelOne();