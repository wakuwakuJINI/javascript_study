/**
 * 타입변환
 * Type Conversion
 * 
 * 1)명시적
 * 2)암묵적
 */

let age=32;

//명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

//암묵적
// let test = age + '';
// console.log(typeof test, test);

// console.log('98'+ '2')
// console.log(98 * 2)
// console.log('98'- 2)


console.log(typeof (99).toString(),(99).toString());
console.log(typeof (true).toString(),(true).toString());
 
//숫자타입으로 변환
console.log(typeof parseInt('0'),parseInt('0.99')); //정수
console.log(typeof parseFloat('0.99'),parseFloat('0.99'));  //실수

/**
 * Boolean 타입으로의 변환
 */
console.log(!!'x');