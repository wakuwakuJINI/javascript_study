// let name = "fruit store";
// let fruits = ["banana", "apple", "mango"];
// let address = "Daegu";

// let store = { name, fruits, address };
// console.log(store);

// console.log(`제 가게 이름은 ${name}입 니다. 위치는 ${address}에 있습니다`);

//------------------//
let name = "noona store";
let fruits = ["banana", "apple", "mango"];
let address = {
  country: "Korea",
  city: "Seoul",
};

function findStore(obj) {
  let {
    name,
    address: { city },
  } = obj;
  return name == "noona store" && city == "Seoul";
}

console.log(findStore({ name, fruits, address })); //true

//------------------//
function getNumber() {
  let array = [1, 2, 3, 4, 5, 6];
  let [first, , third, forth] = array; // 어레이에 건너뛰고싶은 부분이 있다면 , 를 이용해 그자리를 비울 수 있다.

  return { first, third, forth };
}

console.log(getNumber()); //{ first: 1, third: 3, forth: 4 }

//------------------//
//두 어레이들중 최소값을 찾는 함수를 완성하시오
function getMinimum() {
  let a = [45, 23, 78];
  let b = [54, 11, 9];
  return Math.min(...a, ...b); // 여기를 바꾸시오
}
console.log(getMinimum());

//------------------//
//다음의 함수를 화살표 함수로 바꾸시오

// function sumNumber() {
//   // 여기서부터 바꾸시오
//   const sum = (a, b) => a + b;

//   return sum(40, 10);
// }
// console.log(sumNumber());

//-------------------//
//다음함수를 화살표 함수로 바꾸시오
function sumNumber() {
  //여기를 바꾸시오
  //   return addNumber(1)(2)(3);
  //   function addNumber(a) {
  //     return function (b) {
  //       return function (c) {
  //         return a + b + c;
  //       };
  //     };
  //   }
  let addNumber = (a) => (b) => (c) => a + b + c;
  return addNumber(1)(2)(3);
}
console.log(sumNumber());
