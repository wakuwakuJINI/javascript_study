function makeBurger(type, size, num) {
  console.log("빵");
  console.log("상추");
  if (num < 1) {
    return "버거 개수가 0개 입니다.";
  }
  if (type == "불고기") {
    console.log("고기패티두기");
  } else if (type == "새우") {
    console.log("새우패티두기");
  }

  console.log("빵뚜껑");
  console.log(type, "버거", size, "사이즈", num, " 개 준비 완료");

  return size;
}

function serveCoke() {
  console.log("콜라통선택");
  console.log("얼음담기");
  console.log("콜라담기");
}

function servefrenchFries() {
  console.log("감튀박스선택");
  console.log("감튀담기");
}

let result = makeBurger("불고기", "L", 2);
console.log("버거 프로세스 결과", result);

function makeSet() {
  makeBurger("새우", "M", 2);
  servefrenchFries();
  serveCoke();
}
makeSet();

//--------------------------------------//
/** 화살표 함수 ()=>{} 와 this*/

// function foo() {
//   return "hahaha";
// }

// let loo = () => {
//   console.log("hehehehehe");
//   return "hahaha";
// };

// console.log(loo());

let age = 18;
let person = {
  name: "jujin",
  age: 39,
  getInfo: function () {
    //()=>{} 화살표 함수는 this 사용안됨
    console.log(this.age);
  },
};
person.getInfo();
