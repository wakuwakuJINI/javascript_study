
//* 값에 의한 전달, 참조에 의한 전달
// 값에 의한 전달

let score = 80;
let copy = score;
console.log(score);  //80
console.log(copy);   //80

score = 100;
console.log(score); //100
console.log(copy);  //80

// 변수에 원시값(글자,숫자)을 갖는 변수를 할당하면
// 할당받는 변수(copy)에는 값이 복사되어 전달된다
// score와 copy변수는 숫자값(80)을 갖지만
// 다른 메모리 공간에 저장된 별개의 값이다.
// score 변수에 값을 변경해도 copy변수는 그대로이다.

// 참조에 의한 전달
// 객체는 원본 변수를 다른변수에 할당하면
// 참조값이 복사되어 전달된다.
// minji,copy2는 주소는 다르지만 동일한 참조값을 가진다.
// 동일한 객체를 가리킨다. 두개의 식별자가 하나의 객체를 공유한다.

let minji = {
  name: "민지",
  age: 20,
};

let copy2 = minji;
console.log(minji.name);
console.log(copy2.name);
minji.name = "하니";
console.log(minji.name);
console.log(copy2.name);

let person1 = {
  name: "lee",
};
let person2 = {
  name: "lee",
};
console.log(person1 === person2);
console.log(person1.name === person2.name);

//* Spread Operator
// 여러개의 값이 하나로 뭉쳐있는 객체를 펼쳐 값을 개별적으로 넣는 역할을 한다.

let hani = {
  ...minji,
};

console.log(hani);
console.log(hani === minji);

let hani2 = {
  year: 2003,
  ...minji,
};
console.log(hani2);

//오퍼레이터의 순서
let minji2 = {
  name: "민지",
  age: 20,
};
let hani3 = {
  ...minji2,
  name: "하니",
};
console.log(hani3);
console.log(hani3 === minji2);

// 배열또한 객체타입이므로 값이 복사되지 않고 참조값이 복사된다.

const numbers = [1, 2, 3];
const numbers2 = numbers;
const numbers3 = [...numbers];
numbers2.push(4);
console.log(numbers);
console.log(numbers3);
const numbers4 = [...numbers, 7];
console.log(numbers4);
console.log(numbers3 === numbers);
