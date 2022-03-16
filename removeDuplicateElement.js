let array = [1,1,1,1,13,4,34,23,5,34,52];
console.log([... new Set(array)]);

// remove duplicate element using includes

let unique= [];
for(let arr of array){
     !unique.includes(arr)?unique.push(arr):''
}
console.log("unique",unique)