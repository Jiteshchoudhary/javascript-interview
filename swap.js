let a=10,b=30;
let temp=null;
temp=a;
a=b;
b=temp;
console.log(a,b);

a = a ^ b;
b = a ^ b;
a = a ^ b;
    
console.log(a,b)