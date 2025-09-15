console.log(Math.floor(2.88)); // output - 2
console.log(Math.ceil(2.22)); // output - 3
console.log(Math.round(2.22)); // output - 2
console.log(Math.round(2.56)); // output - 3


let a = 4532
console.log(a/10); // output - 453.2
console.log(Math.floor(a/10)); // output - 453
console.log(a%10) // output - 2


console.log(Math.random()) // output - any randome number 0.00 -0.99
console.log(Math.floor(Math.random() * 100)) // output - any randome int number  1 - 100 
console.log(Math.random() * 100) // output - any randome float number  1 - 100 
console.log(Math.floor((Math.random() * 100) + 10)) // output - any randome int number  11 - 100 



console.log(Math.pow(2, 5)) // output - 32
console.log(Math.sqrt(121)) // output - 11 
console.log(Math.cbrt(125)) // output - 5


console.log(Math.trunc(12.22)) // output - 12 // ! it's remove value after point
console.log(Math.trunc(12.92)) // output - 12


console.log(Math.abs(-100)) // output - 100 // ! transfer negetive to positive 
console.log(Math.abs(100)) // output - 100 // ! but not positive to negetive


console.log(Math.max(10 , 20 , 100 , 40)) // output - 100 // ! maximun number 
console.log(Math.min(10 , 20 , 100 , 40)) // output - 10 // ! minimum number 
