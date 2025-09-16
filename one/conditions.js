// if(condition){  }   // ! here "condition" must be true or false..

if(true){
    // it's will be run
}

if(false){
    // it's never be run
} else {
    // it's will be run
}


if(false){
    //  never
} else if(true) {
    // it's will be run
}  else {
    // never
}

// ! condition must be any kind of condition whice value is true or false .. like (5 < 10) or (10 === 10)


const age = 18;
if(isNaN(age)){
    console.log("Age must be a number");
}else if(age >= 0 && age <18 ){
    console.log("You can't vote");
}else if(age >= 18){
    console.log("You can vote"); // it's will be true and output - "You can vote"
} else{
    console.log("Age can't ne negetive");
}


const age2 = "ok";

if(isNaN(age2)){
    console.log("Age must be a number"); // it's will be true and output - "Age must be a number"
}else if(age2 >= 0 && age2 <18 ){
    console.log("You can't vote");
}else if(age2 >= 18){
    console.log("You can vote");
} else{
    console.log("Age can't ne negetive");
}


console.log(NaN === NaN) // ! it's must be false




// discount if else conditions
let amount = 8000;

if(isNaN(amount)){
    console.log("Amount must be a number");
} else if (amount > 0 && amount <= 5000) {
    console.log(`0% Discount! and payable amount ${amount}`);
} else if (amount > 5000 && amount <= 7000){
    console.log(`5% Discount! and payable amount ${amount - (amount* (5/100))}`);
} else if (amount > 7000 && amount <= 9000){
    console.log(`10% Discount! and payable amount ${amount - (amount* (10/100))}`);  // output - "10% Discount! and payable amount 7200"
} else if (amount > 9000){
    console.log(`20% Discount! and payable amount ${amount - (amount* (20/100))}`);
} else {
     console.log("Amount can't be negetive")
}




// electricity bill

let unit = 201;
let perUnitPrice = 0;
if(isNaN(unit)){
    console.log("Unit must be a number")
} else if(unit > 0 && unit <= 100){
    perUnitPrice = 4.2
} else if(unit > 100 && unit <= 200){
    perUnitPrice = 6
} else if(unit > 200 && unit <= 400){
    perUnitPrice = 8
} else if(unit > 400){
    perUnitPrice = 13
} else {
    console.log("Unit must be positive mumber")
}
console.log(`Your used unit is ${unit} and perUnit price is ${perUnitPrice} and total price of electricity is ${unit * perUnitPrice}`) // output - Your used unit is 201 and perUnit price is 8 and total price of electricity is 1608




// note count 
let taka = 5555;
let myTaka = taka;
let thousandNote = 0;
let hundreadNote = 0;
let fiftyNote = 0;
let tweentyNote = 0;
let tenNote = 0;
let fiveNote = 0;

if (isNaN(taka)) {
    console.log("Taka must be a number");
} else {
    if (taka >= 1000) {
        thousandNote = Math.floor(taka / 1000);
        taka = taka % 1000;
    }
    if (taka >= 100) {
        hundreadNote = Math.floor(taka / 100);
        taka = taka % 100;
    }
    if (taka >= 50) {
        fiftyNote = Math.floor(taka / 50);
        taka = taka % 50;
    }
    if (taka >= 20) {
        tweentyNote = Math.floor(taka / 20);
        taka = taka % 20;
    }
    if (taka >= 10) {
        tenNote = Math.floor(taka / 10);
        taka = taka % 10;
    }
    if (taka >= 5) {
        fiveNote = Math.floor(taka / 5);
        taka = taka % 5;
    }
}

console.log(`I have ${myTaka} taka.`); // output - "I have 5555 taka".
console.log(`${thousandNote} note of * 1000`); // output - "5 note of * 1000"
console.log(`${hundreadNote} note of * 100`); // output - "5 note of * 100"
console.log(`${fiftyNote} note of * 50`); // output - "1 note of * 50"
console.log(`${tweentyNote} note of * 20`); // output - "0 note of * 20"
console.log(`${tenNote} note of * 10`); // output - "0 note of * 10"
console.log(`${fiveNote} note of * 5`); // output - "1 note of * 5"
console.log(`Remain ${taka} taka`); // output - "Remain 0 taka"
