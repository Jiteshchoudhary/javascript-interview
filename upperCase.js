let string = 'jitesh choudhary write first letter on upper case';
let word = string.toLowerCase().split(' ').map((ele) => {
    return ele[0].toUpperCase() + ele.slice(1);
});

console.log(word.join(" "))