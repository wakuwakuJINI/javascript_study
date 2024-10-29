/**

학생들 평균 키 구하기
ex) student_heights = [180, 124, 165, 173, 189, 169, 146]
평균키는 총 학생 키의 합을 학생 수로 나누면 구할 수 있다.
ex) 180 + 124 + 165 + 173 + 189 + 169 + 146 = 1146
ex) 위 합은 student_heights 배열의 7개를 더한 값이다.
ex) 1146 ÷ 7 = 163.71428571428572
평균 키를 첫째자리에서 반올림한다. = 164
예시 입력1 -> 156 178 165 171 187
예시 출력1 -> 키합 = 857 학생의 수 = 5 평균 키 = 171
예시 입력2 -> 151 145 179
예시 출력2 -> 키합 = 475 학생의 수 = 3 평균 키 = 158
<심화> : 학생들의 최대 키와 최소 키도 출력해보세요.
힌트 : 첫째자리에서 반올림 하는방법은 Math.round()을 사용한다.
출력방법은 document.write()를 사용한다.
*/
let student_heights = prompt("학생의 키를 입력해주세요", "167 180").split(" ");

for (let i = 0; i < student_heights.length; i++) {
  student_heights[i] = Number(student_heights[i]);
}
// 위 코드는 건들지 마세요👆


// 아래 코드를 입력해 주세요👇

let sum=0;
let average=0;
let len = student_heights.length;
let max;
let min;
for(let i=0; i<len; i++){
  sum += student_heights[i]
  
  if (i == 0) {
    max = student_heights[i]
    min = student_heights[i]
  }
  else {
    if(max < student_heights[i]){
      max = student_heights[i]
    }
    if(min > student_heights[i]){
      min = student_heights[i]
    }
  }

}
average= Math.round(sum/len)
document.write(`키 합계 : ${sum}<br>`)
document.write(`학생수는 : ${len}<br>`)
document.write(`키 평균 : ${average}<br>`)
document.write(`키 최대값 : ${max}<br>`)
document.write(`키 최소값 : ${min}`)







