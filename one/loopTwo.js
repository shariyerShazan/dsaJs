// prime number
let x = 13;
let isPrime = true;

if (x < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(`${x} is ${isPrime ? "a Prime number" : "Not a prime number"}`);



// even && odd number
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + " -> Even");
    } else {
      console.log(i + " -> Odd");
    }
  }


for(let i = 0 ; i <=10 ; i++){
    if(i===5){
        break
    }
    console.log(i) // output - {0 , 1 , 2 , 3 , 4}
}

for(let i = 0 ; i <=10 ; i++){
    if(i===5){
        continue
    }
    console.log(i) // output - {from 0 to 10 without 5}
}


let m = 1
while(m <= 10){
    console.log("While" , m); // output - {from 1 to 10 }
    m++
}




//  reverse number

let num = 1234
let reverse = 0

while(num > 0){
    let rem = num % 10;
    reverse = (reverse * 10) + rem
    num = Math.floor(num/10)
}
console.log(reverse) // output - 4321



// palindrome
let num2 = 1441
let reverse2 = 0
let originalNum = num2
while(num2 > 0){
    let rem = num2 % 10;
    reverse2 = (reverse2 * 10) + rem
    num2 = Math.floor(num2/10)
}
if(reverse2 === originalNum){
    console.log("It's a palindrome number") // output - "It's a palindrome number"
}else{
    console.log("It's not a palindrome number")
}



let name = "shazan"
let reverseStr = ""
for(let i = (name.length-1) ; i >= 0; i--){
    reverseStr += name[i]
}
console.log(reverseStr) // output - "nazahs"



