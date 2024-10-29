/**
 * 함수의 반환문
 */

// 반환문의 기본구조
// function 함수이름(){
//     return 표현식 or 반환값
// }
// 반환문의 동작원리
// 반환문은 두가지 역할을 한다.
// 첫째: 함수의 실행을 중단하고 몸체{}를 빠져나간다.
// 반환문 이후에 다른코드가 존재하면 그 코드는 무시된다.

// function multiply(x,y){
//     return x * y;
// }

// 두번째 : 반환문은 return키워드 뒤에 오는 표현식을
// 평가해 반환한다.
// return 키워드 뒤에 반환값을 사용할 표현식이 없으면
// undefiend 반환된다.
// 반환문 자체도 생략이 가능
// undefiend 반환
function foo(x, y) {}
console.log(foo(1, 2));

function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
let adult = isAdult(20);
let notAdult = isAdult(15);
console.log(adult);
console.log(notAdult);

console.log("----------");
// 1. 세개의 숫자를 입력받아 평균값 계산하는 함수
// 평균값 반환하여 출력
// 숫자세개 더한 값 / 3
function average(a, b, c) {
  return (a + b + c) / 3;
}
let result = average(1, 2, 3);
console.log("첫번째 ::" + result);
// 2. 숫자로 이루어진 배열을 입력받아
// 배열 내 짝수요소의 개수를 반환하는 함수 작성
// [10, 20, 30, 5]
function countEvenNumbers(numArray) {
  // numArray = [10, 20, 30, 5];
  let count = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

result = countEvenNumbers([10, 20, 30, 5]);
console.log("두번째 :: " + result);

// 3. 입력받은 값의 절대값을 반환하는 함수 작성
// 5 -> 5 , -3 -> 3
function absoluteValue(number) {
  if (number === -0) {
    return "잘못된 숫자";
  }

  if (number > 0) {
    return number;
    // 0
  } else if (number === 0) {
    return number;
  }
  //음수
  else {
    return -number;
  }
}


console.log(":::::::::::" + absoluteValue(-0));

// 4. 배열의 요소중 특정 값 찾기
// 숫자로 이루어진 배열과 찾고자 하는 숫자를 입력받아
// 해당숫자의 index값을 출력하고 없으면 false 출력하기
// ex) 인수 :[1,2,3],3 출력 : 2
function containsValue(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      return i;
    }
  }
  return false;
}

console.log("!!!!!!!!!!!" + containsValue([1, 2, 3], 5));

// 5. 두숫자를 입력받고 합,곱,빼기,나눗셈,나머지를
// 출력하는 함수를 각각 작성하기
const sum = (x, y) => x * y;
const minus = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;
const remain = (x, y) => x % y;

//6. 문자열 배열을 입력받아 각 문자열의 길이를 요소로 갖는
// 새로운 배열 반환하기
//ex) 인수 :["banana","apple",'grape'], 출력 : [6,5,5]
function getStringLengths(stringArray) {
  let lengths = [];
  for (let i = 0; i < stringArray.length; i++) {
    lengths.push(stringArray[i].length);
  }
  return lengths;
}

const studentsScores = [
  [85, 90, 78],
  [88, 92, 80],
  [90, 85, 85],
  [70, 75, 80],
  [95, 90, 92],
];
//7. 각 학생의 평균 성적을 계산하는 함수 작성
function calculateAverageScores(scores) {
  // 각 학생들의 평균점수를 담을 배열 생성
  let averages = [];
  for (let i = 0; i < scores.length; i++) {
    // 학생의 총점수를 담을 변수 생성
    let total = 0;
    for (let j = 0; j < scores[i].length; j++) {
      //ex) scores[0][0] + scores[0][1] ...
      //ex) scores[1][0] + scores[1][1] ...
      total += scores[i][j];
    }
    //  총 점수 / 2차원배열의 길이(점수의 개수)
    let average = total / scores[i].length;
    averages.push(average);
  }
  return averages;
}

console.log(calculateAverageScores(studentsScores));

//8. 전체 학생들의 평균 성적을 계산하는 함수 작성
/**
 * 
 * [
  84.33333333333333,
  86.66666666666667,
  86.66666666666667,
  75,
  92.33333333333333
] 
 */
function calculateOverallAverage(averageScores) {
  // averaageScores => calculateAverageScores(studentsScores);
  let total = 0;
  // 각 학생점수의 평균값들을 더함
  for (let i = 0; i < averageScores.length; i++) {
    total += averageScores[i];
  }

  let overalAvarage = total / averageScores.length;
  return overalAvarage;
}
let totalAverage = calculateAverageScores(studentsScores);

calculateOverallAverage(totalAverage);