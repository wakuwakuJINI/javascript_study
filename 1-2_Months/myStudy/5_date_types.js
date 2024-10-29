/**
 * 6 Primitive types 1 object type
 * 
 * 
 * 1_number
 * 2_string
 * 3_Boolean
 * 4_undefined
 * 5_null
 * 6_symbol
 * 7_Object(객체) - function, Array, Object
 */

const age =39;
const tempature=-10;
const pi=3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log("---------------");


const seoYuJin='서\'유진'
console.log(typeof seoYuJin);
console.log(seoYuJin)

/**
 *Templite Literal

 *newline -> \n
 *tab -> \t
 *백슬래시를 스트링으로 표현하고 싶다면 두번 입력\\
 * 
 */
const seoYuJin2=`서유진
정진범` // ` `백틱쓰면 입력한 그대로 출력된다
console.log(seoYuJin2)


const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);

// //const test1='1';
// const test2='1';

// console.log(test1 === test2);
// const symbol1 = symbol('1');
// const symbol2 = symbol('1');
// console.log(symbol1 === symbol2);


/**
 * Object 타입
 * Map
 * key : value
 */

const dictionary = {
    red :'빨간색',
    orange :'주황색',
    yellow : '노란색'
};
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);

console.log(typeof dictionary);

/**
 * Array
 */

const iveMembersArray =[
    '안유진',
    '장원영',
];
console.log(iveMembersArray);
console.log(iveMembersArray[1]);

iveMembersArray[0]='서유진';
console.log(iveMembersArray);