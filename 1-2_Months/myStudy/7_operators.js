/**
 * 연산자
 *
 */

console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10 % 10);
console.log(10 % 3);

console.log('------------------')

console.log(10 *(10+10));

let number = 1 ;

number ++;
console.log(number);
number --;
console.log(number);

let result = 1;
console.log(result)

result = number ++;
console.log(result, number);
console.log('-----------');

number =100;

number += 10;
console.log(number)
number -= 10;
console.log(number)

console.log(true==1);
console.log(false==0);

/**
산술연산자
대입연산자
증감연산자
전위연산자*/
let x=1;
let y=1;

x = --y; // y+1 - > x=y
console.log(x,y); // -> 0,0

//후위연산자
let z=1;
let a=1;

a=z++;
console.log(a,z);//1,2

/**비교연산자
두데이터의 크기를 비교하는 연산자,
true, false 둘중 하나를 반환(논리형)*/

//1) 동등연산자(==)
console.log(1==1);

//=== : 값뿐만 아니라 타입까지 비교
console.log(1==='1');

//2) 부등연산자 !=
console.log(3 != 4);

//3) 크기비교연산자 >, >=, <, <=
console.log(5 > 3);

// === , !== 사용하기

/**
 * 삼항조건연산자(ternary operator) ? : 
 */

console.log(10 > 0 ? '10이 0보다 크다': '10이 0보다 작다'); //true->왼쪽 false->오른쪽

/**
 * 논리연산자
 * 1) $$ (and)  -> 모두 true 여야 true 를 반환한다.
 * 2) || (or)   -> 하나만 true 여도 true를 반환한다.
 */

console.log(true && true); //true
console.log(true && false); //false 
console.log(false && true);//false
console.log(false && false); //false 
console.log("------------------------")
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true);//true
console.log(false || false); // false



