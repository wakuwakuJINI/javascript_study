/*forEach 반환값이 없다, 단순 for문과 같이 작동한다.*/

let fruits = [
  "banana",
  "apple",
  "kiwi",
  "strawberry",
  "pineapple",
  "melon",
  "cherry",
];

fruits.forEach((item, index) => {
  console.log(item, index);
});

/* map  반환값을 배열에 담아 반환한다.*/

let ceoList = [
  { name: "Larry Page", age: 23, ceo: true },
  { name: "Ed Lee", age: 50, ceo: true },
  { name: "Elon Musk", age: 55, ceo: true },
];

let data = ceoList.map((item) => {
  return item.age; // item+ "문자" 도 반환가능
});
console.log("map", data);

/* filter 조건에 충족하는(true) 아이템만 배열에 담아 반환한다.*/

let data2 = ceoList.filter((item) => {
  return item.name.startsWith("E"); // item+ "문자" 도 반환가능
});
console.log("filter", data2);

/**some 조건에 충족하는 아이템이 하나라도 있으면 true 반환, 아니면 false */
let data3 = ceoList.some((item) => {
  return item.name.startsWith("E"); // item+ "문자" 도 반환가능
});
console.log("some", data3);

/*every 모든 배열에 아이템이 조건을 충족하면 true 반환, 아니면 false.*/
let data4 = ceoList.every((item) => {
  return item.name.startsWith("E"); // item+ "문자" 도 반환가능
});
console.log("every", data4);

/*find  조건에 충족하는 아이템 하나만 반환(여러개라면 첫번째것만 반환) */
let data5 = ceoList.find((item) => {
  return item.name.startsWith("E"); // item+ "문자" 도 반환가능
});
console.log("find", data5);

/*findIndex 조건에 충족하는 아이템의 인덱스값 반환 (여러개라면 첫번째아이템의 인덱스번호만 반환) */
let data6 = ceoList.findIndex((item) => {
  return item.name.startsWith("E"); // item+ "문자" 도 반환가능
});
console.log("find", data6);
