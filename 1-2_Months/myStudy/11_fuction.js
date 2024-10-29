/**
 * 2라는 숫자에 * 10/2 %3 스트링으로 변환해서
 * 반환받고싶다면 어떻게 해야할까?
 * 
 */

console.log((2*10/2 % 3).toString());
console.log((3*10/2 % 3).toString());

/**DRY
 * Don't
 * Repeat
 * Yourself
 */

function calculate(){
    console.log((2*10/2 % 3).toString());
}
//calculate();

function calculate(number){
    console.log((number*10/2 % 3).toString());
}
/**
 * 함수에서 입력받는 값에대한 정의를 Parameter라고 한다.
 * 
 * 실제 입력하는 값은 argument라고 한다.
 */
calculate(4);

function multiply(x, y){
    console.log(x * y);
}
multiply(2, 4);

function multiply(x, y=10){
    console.log(x * y);
}
multiply(2,4);
multiply(2);

/**
 * 반환받기
 * return 받기
 */

function multiply(x, y){
    return x * y;
}
const result1=multiply(2,4);
console.log(result1);

/**Arrow 함수 */

const multiply2 = (x, y)=>{
    return x * y;
}
console.log(multiply2(3,4));

const multiply3 =(x, y) =>x * y;
console.log(multiply3(4,5));

const multiply4 =x =>y =>z=>`x: ${x} y:${y} z:${z}`;
console.log(multiply4(2)(5)(7));

function multiply5(x){
    return function(y){
        return function(z){
            return `x: ${x} y:${y} z:${z}`
        }
    }
}
console.log(multiply5(2)(5)(7));

const multiplyTwo=function(x,y){
    return x * y;
}
console.log(multiplyTwo(4,5));

const multiplyThree =function(x, y, z){
    console.log(arguments);
    return x * y * z;
}
console.log(multiplyThree(4,5,6));

const multiplyAll =function(...arguments){
    return Object.values(arguments).reduce((a,b) => a * b, 1);
}
console.log(multiplyAll(3,4,5,6,7,8,9,10));


console.log(typeof multiply);
console.log(multiply instanceof Object); //instanceof 