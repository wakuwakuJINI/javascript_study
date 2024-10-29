/**
 * If and switch
 */

let number=5;

if(number % 2 === 0){
    console.log('number 변수는 짝수입니다')
}else{
    console.log('number 변수는 홀수입니다')
}

if(number % 2 === 0){
    console.log('2의 배수입니다')
} else if (number % 3 === 0){
    console.log('3의 배수입니다')
} else{
    console.log('2,3의 배수가 아닙니다')
}

const englishDay = 'sunDay';

let KoreanDay;

switch(englishDay){
    case 'monday':
        KoreanDay='월요일';
        break;
    case 'tuesDay':
        KoreanDay='화요일';
        break;
    case 'wednesDay':
        KoreanDay='수요일';
        break; 
    case 'thursDay':
        KoreanDay='목요일'
    case 'friDay':
        KoreanDay='금요일'
        break;
    default:
        KoreanDay='주말';
        break;
}
console.log(KoreanDay);