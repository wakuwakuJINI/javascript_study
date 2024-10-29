let fruit = ["banana", "apple", "grape", "mango"];

console.log(fruit);
console.log(fruit[3]);

fruit[0] = "cherry";
console.log(fruit);

//pop() : 마지막에 있는 아이템 뺌
fruit.pop();
console.log(fruit);

//push() : 마지막에 아이템 추가
fruit.push("kiwi");
console.log(fruit);

//includes() : 아이템 포함하는지 boolean 값 출력
console.log(fruit.includes("kiwi")); // 아이템 있으면 true, 아이템 없으면false

//indexOf() : 아이템에 인덱스 번호 알려줌
console.log(fruit.indexOf("apple"));

//slice() : 배열 아이템을 잘라내는 역할(시작점, 끝점. - 끝점은 미포함)
//기존의 배열을 건드리지 않고 새로운 배열을 가져온다. 새로운변수를 선언해줘야한다.
let extrafruit = fruit.slice(1, 3);
console.log(extrafruit);

// console.log(fruit.slice(1,3));       =>이렇게 하면 안됨!!!!!!!!!

//splice() : 시작점부터 몇개의 아이템을 잘라낼건지 나타냄
fruit.splice(0, 3);
console.log(fruit);

//for...of
let fruit1 = ["banana", "apple", "grape", "mango"];
for (let i = 1; i < 2; i++) {
  console.log("내가좋아하는 과일은", fruit1[i]);
}

for (let item of fruit1) {
  console.log("내가좋아하는 과일은", item);
}

let sentence = "유진이는 징봉이를 사랑해";
for (let char of sentence) {
  console.log("char", char);
}

//for ...in (동적인 객체에 값을 접근할때, key 값이 있는지 없는지 확인할때, 배열에서는 index값이 나온다)

let person = {
  name: "유진",
  age: 39,
  cute: true,
};

for (let key in person) {
  console.log("key", key);
} // name, age, cute 가 출력된다

for (let key in fruit1) {
  console.log("배열의 키값은 index값이다", key);
}
