
//직각삼각형
let star ="";

for(let i=1; i<=10; i++){
    for(let j=1; j<=i; j++){        
        star += "*";
    }
    star += "\n";
}
//console.log(star)


//역직각삼각형

for(let i=10; i>=1; i--){
    for(let j=1; j<=i; j++){        
        star += "*";
    }
     star += "\n"
}
console.log(star)

//반대 직각삼각형
for (let i = 1; i <=10; i++) {
        let star = "";
        
    for (let j = 1; j <= 10-i; j++) {
            star += " ";    
        }       // 공백 추가
       
        for (let k = 1; k <= i; k++) {
            star += '*';     
            }      // '*' 추가
        console.log(star);
    }
    
//반대 역직각삼각형

    for (let i = 1; i <= 10; i++) {
        let star = '';
        for (let j = 1; j < i; j++) {
            star += ' ';
        }
        for (let k = 10; k >= i; k--) {
            star += '*';
        }
        console.log(star);
    }

