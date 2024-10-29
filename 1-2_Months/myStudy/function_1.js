/**
 * 함수 정의 방식
 * 1.함수선언문(function add())
 * 2.익명함수(이름이 없는 함수)
 * 3.화살표함수(arrow function)
 */

// 두수를 더하는 함수
const add = function (x, y) {
    return x + y;
};
console.log(add(3, 2));
  
const multiply = (x, y) => x * y;
console.log(multiply(3, 2));
  
  //매개변수가 하나 일때는 괄호 생략 가능
const add1 = x => x + 3;
console.log(add1(5));
  
const add2 = () => {
  console.log("hello");
};
  add2();
  
  // 함수몸체가 하나의 문으로 구성된다면
  // {}중괄호 생략이 가능하다
  
  const power = (x) => x ** 2;
  power(3);
  console.log(power(3));
  
  //중괄호를 생략한 경우 내부의 코드가
  //표현식이 아닌 문이라면 에러가 발생한다.
  
  const arraw = () => {
    const x = 2;
  };
  
  //배열의 모든 요소를 두배로 만드는 함수
  //숫자를 두배로 만드는 함수, 배열을 순회하는 함수 각각 생성하기
  //화살표함수로 만들기
  //입력 :[1,2,3,4,5] 출력 :[2,4,6,8,10]
  
  const double = (x) => x * 2;
  
  const doubleArray = (array) => {
    const result = []; // array=[];
    for (let i = 0; i < array.length; i++) {
      result.push(double(array[i])); // 아니면,  array[i]=double(array[i]);
    }
    return result; //return array;
  };
  console.log(doubleArray([1, 2, 3, 4, 5]));
  
  //2차원배열 각행의 합계를 계산하는 함수를 작성한다.
  //화살표함수를 이용하여 만들기
  //입력 : [[1,2,3],[4,5,6],[7,8,9]]
  //출력 : [6,15,24]
  //요소의 합을 구하는 함수
  
  
  const sum = (array) =>{
    let total=0;

    for(const item of array){
      total += item;
    }
    return total;
  };
  const matrix =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ]
  const sum2=(matrix)=>{
    for(let i=0; i<matrix.length;i++){
      let total=sum(matrix[i])
      result.push(total)
    }
    return result;
  }
  console.log("결과는" + sum2(matrix))
  //로또번호 6자리를 입력하고 당첨된 번호의 개수를 출력하기
  //로또는 1~45의 숫자 6개가 랜덤으로 생성된다.
  //랜덤숫자는 중복될 수 없다.
  //입력 :[1,4,34,23,41,7]
  //랜덤숫자 :[1,4,5,23,24]
  //출력 : 3

  function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
      const randomNum = Math.floor(Math.random() * 45) + 1;
      numbers.add(randomNum);
    }
    return Array.from(numbers);
  }
  
  // 사용자가 입력한 번호
  const userInput = [1, 4, 34, 23, 41, 7]; // 입력 예시
  
  // 랜덤으로 생성된 로또 번호
  const lottoNumbers = generateLottoNumbers();
  
  console.log('사용자 입력 번호:', userInput);
  console.log('랜덤 생성 번호:', lottoNumbers);
  
  // 일치하는 번호의 개수 계산
  function countMatchingNumbers(userInput, lottoNumbers) {
    let matchCount = 0;
    for (const number of userInput) {
      if (lottoNumbers.includes(number)) {
        matchCount++;
      }
    }
    return matchCount;
  }
  
  // 일치하는 번호 개수 출력
  const matchingCount = countMatchingNumbers(userInput, lottoNumbers);
  console.log('당첨된 번호의 개수:', matchingCount);