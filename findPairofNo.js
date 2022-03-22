function getSumPairZero(array, no) {
    for (let j = 0; j < array.length; j++) {
        for (let i = 1; i < array.length; i++) {
            if (array[j] + array[i] === no) {
                return [array[j], array[i]]
            }
        }
    }
}
const result = getSumPairZero([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], -3)
console.log(result)
console.log(getSumPairZero([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], 7))