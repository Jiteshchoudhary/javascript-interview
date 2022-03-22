let vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelCounter = 0
let consnantCounter = 0;

let words = 'jitesh choudhary';
words = words.split('');

for (let word of words) {
    if (vowels.includes(word)) {
        vowelCounter += 1
    } else {
        consnantCounter += 1;
    }
}

console.log("vowel", vowelCounter, "constant counter", consnantCounter)