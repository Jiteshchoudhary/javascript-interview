let string ='Jitesh choudhary';
function reverseString(){
    return string.split(' ').reverse().join(' ');
}

function reverseWord(){
    return string.split('').reverse().join('')
}

function reverseOnlyWord(){
return string.split('').reverse().join('').split(' ').reverse().join(' ')
}

function reverseStringWithoutInbuilt(){
    let result = '';
    for (let i=string.length-1; i>0; i--){
        console.log(string[i])
        result+=string[i];
    }
    return result;
}
console.log(reverseString());
console.log(reverseWord())
console.log(reverseOnlyWord())
console.log(reverseStringWithoutInbuilt())