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




let x = 55.54523
console.log(x) // output - 55.54523
console.log(x.toFixed(2)) // output - "55.54" // ! remember it's a string
console.log(x.toFixed(3)) // output - "55.545"
// ! toFixed return string 
console.log(Number(x.toFixed(2))) // output - 55.54 // ! it's number



let y = 15
console.log(String(y)) // output - "15" // ! convert to string



//  rectengle
let f = 15;
let g = 30
console.log("Area or rectangle is" , f * g) // output - Area or rectangle is 450



// triangle
let m = 5
let n = 4
let o = 3
let s = (m + n + o)/2  // ! {(m + n) > o}  - it's must be two side multiple is getter then other one side value if it is a triangle
console.log("Area of a triangle is" , Math.sqrt(s * (s - m) * (s - n) * (s - o))) // output - Area of a triangle is 6



// circle
let radiour = 12
console.log("Area of a circle is" , (2* 3.1416 * 12)) // output - Area of a circle is 75.3984
console.log("Area of a circle is" , (2* Math.PI * 12)) // output - Area of a circle is 75.39822368615503
console.log("Area of a circle is" , Number((2* Math.PI * 12).toFixed(2))) // output - Area of a circle is 75.40