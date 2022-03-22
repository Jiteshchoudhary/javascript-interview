function countOccurese(str, letter) {
    let counter = 0;
    for (let word of str.split('')) {
        if (word == letter) {
            counter += 1
        }
    }
    return counter;
}
console.log(countOccurese('jitesh ji', 'j'));