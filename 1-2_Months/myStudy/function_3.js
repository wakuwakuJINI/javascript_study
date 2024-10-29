/**
 * callback()
 */

function greet(name, callback) {
    console.log("hello" + name);
    callback();
  }
  function sayGoodBye() {
    console.log("Good Bye");
  }
  
  greet("mike", sayGoodBye);

  
  
  // 콜백함수의 사례
  
  let numbers = [1, 2, 3, 4];
  let onePlusNumbers = numbers.map((e) => {
    return e + 1;
  });
  console.log(onePlusNumbers);
  
  numbers.forEach(function (number) {
    console.log(number);
  });
  
  //주어진 숫자가 짝수인지 홀수인지 확인하는 함수
  function checkNumber(number, callback) {
    if (number % 2 === 0) {
      callback(true, "짝수입니다");
    } else {
      callback(true, "홀수입니다.");
    }
  }
  function resultFn(error, str) {
    if (error === true) {
      console.log("error입니다.");
      console.log(str);
    }
  }
  checkNumber(5, resultFn);