function checkPalindrom(str1){
    let str2=str1.split('').reverse().join('');
    return str1===str2?true:false
}
console.log(checkPalindrom('str'));
console.log(checkPalindrom('aba'))