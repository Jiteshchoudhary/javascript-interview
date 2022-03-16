//anagram string is that if two string contain same character

let str1='jitesh';
let str2='hitesj';

function anagramString(str1,str2){
    let firstString=str1.split('').sort().join();
    let secondString=str2.split('').sort().join();
    return firstString===secondString?true:false
}

console.log(anagramString(str1,str2));
console.log(anagramString('abc','abcd'))