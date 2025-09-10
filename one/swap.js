let a = 10; 
let b = 20;

let c = a;  // a = 10 , b = 20 , c = 10 
a = b;  // a = 20 , b = 20 , c = 10
b = c; //  a = 20 , b = 10 , c = 10 

console.log(a); // output - 20

console.log(b); // output - 10

console.log(c); // output - 10



// 
let m = 20; 
let n = 30; 
m = m + n; // m = 50 , n = 30
n = m - n; // m = 50 , n = 20
m = m - n; // m = 30 , n = 20

console.log(m); // output - 30
console.log(n); // output - 20





let x = 5;
let y = 10;

// let temp = x
// x = y
// y = temp

[x,y] = [y,x];

console.log(x); // output - 10
console.log(y); // output - 5