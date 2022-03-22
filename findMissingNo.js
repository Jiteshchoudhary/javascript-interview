function missingNo(no) {
    let n = no.length - 1;
    return n * (n + 1) / 2;
}

console.log(missingNo([1, 2, 4]))