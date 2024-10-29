 //입력한 숫자가 0 , 음수, 양수인지 판단
 let num=0;

 if(num>0){
    console.log("양수입니다")}
    else if(num<0){
        console.log("음수입니다")    
    }
    else{
        console.log("0입니다")
    }

//레포트 점수에 따라 등급을 매기는 프로그램을 만드시오.
/**
 * 90~100:A
 * 80~89:B
 * 70~79:C
 * 60~69:D
 * less than 59:F
 */

let score=77;
let grade="";

if(grade >=90 && grade <=100){
    grade="A"
}else if(grade >=80 && grade <=89){
    grade="B"
}else if(grade >=70 && grade <=79){
    grade="C"
}else if(grade >=60 && grade <=69){
    grade="D"
}else if(grade<60){
    grade="F"
}else{console.log("잘못된 범위의 숫자입니다")}
console.log(grade)

/**
 * 한 지원자가 우리 회사에 지원을 했다. 지원자가 사용 가능한 스킬은 배열에 제공이 된다
let skills = ["HTML","CSS","Javascript","React"]
Javascript와 React 둘 다 할 줄 안다면 “합격!” 
Javascript와 React 둘 중 하나만 할 줄 안다면 “예비”, 
두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오.
 */
let skills = ["HTML","CSS","Javascript","React"]

if(skills.includes("Javascript") && skills.includes("React")){
    console.log("합격!!")
} else if(skills.includes("Javascript") || skills.includes("React")){
    console.log("예비!!")
} else{
    console.log("탈락")
}
