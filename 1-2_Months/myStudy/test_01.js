function isPalindrome(s){
    const cleaned=s.replace(/^a-z0-9/gi,'').toLowerCase();
    const reversed=cleaned.split('').reverse().join('');
    return cleaned ===reversed;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("no 'x' in Nison"))