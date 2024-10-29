//* 객체

//1. property : 객체의 상태를 나타내는 값
//키(key)와 값(value)로 구성된다. key 는 중복이 안된다. value는 중복가능
//key:value
//method: 객체에 묶여있는 함수

//2.메서드에서 자신이 속한 객체의 프로퍼티에 접근하는 방법 ${this. }

let minji = {
  name: "혜인",
  age: 20,
  group: "뉴진스",
  company: ["하이브", "어도어"],
  song: function () {
    console.log(this);
    return `${this.name}가 노래를 부릅니다.`;
  },
};

console.log(minji.name);
console.log(minji["name"]);
console.log(minji.song());

//3.변수를 사용하여 객체를 생성하는 방법
const nameKey = "name";
const nameValue = "하니";

const ageKey = "age";
const ageValue = "20";

const hani = {
  [nameKey]: nameValue, //  key 에 변수를 넣을때 [ ] 사용
  [ageKey]: ageValue,
  song: function () {
    return `${this.name}가 노래를 부릅니다.`;
  },
};

console.log(hani.song());

//4. 프로퍼티의값을 변경
hani.age = 24;
console.log(hani.age);
hani["age"] = 30;
console.log(hani.age);

// 5. 프로퍼티의 동적생성
// 존재하지 않는 프로퍼티에 값을 추가할수 있다
console.log(hani.group); // undefined
hani.group = "뉴진스";
console.log(hani.group);

hani["gender"] = "female";
console.log(hani.gender);

//6. 프로퍼티 삭제방법
delete hani.group;
console.log(hani);

let coziHouse = {
  name: "코지하우스",
  location: "용계동",
  menu: ["스테이크", "파스타", "필라프"],
  drink: {
    soda: ["콜라", "사이다"],
    beer: ["생맥주", "병맥주"],
  },
};

console.log(coziHouse);
// 7.객체의 특징
// const로 선연할 경우 객체 자체를 변경할 수는 없다
// 객체안의 프로퍼티나 메서드는 변경가능하다
//*(배열도 마찬가지)

const heyin2 = {
  name: "혜인",
  age: 20,
};

// heyin2.name = "민지";
// heyin2 = {};  => error 남, 객체 자체 변경 X 
console.log(heyin2);

//8 객체의 모든 키 가져오기
console.log(Object.keys(heyin2));

//9.객체의 모든 값 가져오기
console.log(Object.values(heyin2));

//10.객체의 확장기능
//프로퍼티값을 변수로 사용할 경우
//변수의 이름과 프로퍼티키가 동일한 이름일때
//프로퍼티 키를 생략할 수 있다.

const name = "혜인";
const age = 20;

const heyin3 = {
  name,
  age,
};
console.log(heyin3);

//11. for.. in
//객체의 내용을 순회하는데 주로 사용하는 반복문

let minji2 = {
  name: "민지",
  age: 20,
  gruop: "뉴진스",
  friends: ["장원영", "안유진"],
};
minji2.age;
minji2["age"];

for (let key in minji2) {
  if (key === "friends") {
    for (let item of minji2[key]) {
      console.log(`친구 :: ${item}`);
    }
  }
  console.log(`minji2 :: ${minji2[key]}`);
}