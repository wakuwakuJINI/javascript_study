//1. 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.
let sum=0
for(i=1; i<=100; i++){
   sum += i
}
console.log(sum)


//2. 1부터 100까지 홀수만 출력하자.

for(i=1; i<=100;i+=2){    
        console.log(i)    
}


//3. 1부터 50까지 369결과를 프린트하자.

for(let i=1;i<=50;i++){
    let stringValue = i.toString() // 숫자 타입을 string 타입으로 바꾸는 함수 
    let result = ""
    for(let j=0;j<stringValue.length;j++){
      if(stringValue[j] == "3" ||stringValue[j] == "6" ||stringValue[j] == "9" ){
        result+="짝"
      }
    }
    console.log(result.length>0?result:i)
  }
//4. 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.

let n =11
let isPrime = true

if (n ===1){// 1은 소수가 아님 
    isPrime = false
}else{
    for(let i=2;i<n;i++){
      if(n % i == 0){
        isPrime =  false 
      }
    }
}

console.log(isPrime)