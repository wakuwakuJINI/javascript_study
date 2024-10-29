//1.object shorthand assignment

let name="YuJin"
let age=39

let person={
    name:name,
    age:age
}
console.log(person)

//2.Destructuring

let person1={
    name1:"YuJin",
    age1:40
}
// let name1=person1.name
// let age1=person1['age']

let {name1,age1}=person1;
console.log(name1,age1)

let array=[1,2,3,4]
let [a,b,...rest]=array;

console.log(rest);   // [3,4]출력

//3.spread

let person2={
    name1:"YuJin",
    age1:40
}

let person3={...person2 , address:"대구",  name1:"Bom"} 
// ...person3 내용은 같지만 객체가 2개다. 객체를 하나 더 생성함.새로운 키 값 추가가능
// 값을 변경도 가능하다.
let person4=person2  // 객체의 주소값만 복사, 객체는 하나이고 그 객체를 참조하는 변수가 두개.

console.log(person2)
console.log(person4) //두개의 내용은 같음.

console.log(person2 === person3) // false
console.log(person2 === person4) // true 
console.log(person3)

//배열에도 가능
let c=[1,2];
let d=[...c,3];
let e=[...c,...d]

console.log(c,d)//[1,2][1,2,3]
console.log(e)  //[1,2,1,2,3]

// 4.삼항연산자
let person5={
    name1:"YuJin",
    age1:40
}


if(person5){
    console.log(person5.name1)
}else{
    console.log("there is no person") // let person5=null 일때 출력
}

//삼항연산자로 표현하면
console.log(person5 ? person5.name1 : "there is no person")