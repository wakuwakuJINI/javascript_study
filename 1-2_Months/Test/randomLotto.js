function lottoNumbers() {
  const numbers = [];
    for (i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 45) + 1;
    if (!loNum(numbers, randomNum)) {
      numbers.push(randomNum);
    } else {
      i--;
    }
  }
  return numbers;
}

const inputNum = [1, 4, 34, 23, 41, 7];
const lo_number = lottoNumbers();

console.log(inputNum);
console.log(lo_number);

function matchingNumber(inputNum, lo_number) {
  let count = 0;

  for (i = 0; i < inputNum.length; i++) {
    for (j = 0; j < lo_number.length; j++) {
      if (inputNum[i] === lo_number[j]) {
        count++;
      }
    }
  }
  return count;
}

const matchcount = matchingNumber(inputNum, lo_number);
console.log(matchcount);
profile
서유진