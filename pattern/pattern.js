const prompt = require("prompt-sync")();
let n = prompt("Enter a number: ")

// ! one
for(let i = 1 ;  i <= n ; i++){
    for(let j = 1 ; j<= n ; j++){
        process.stdout.write("* ")
    }
    console.log();
}
console.log()

// ! two
for(let i = 1 ;  i <= n ; i++){
    for(let j = 1 ; j <= i ; j++){
        process.stdout.write(i +" ");
    }
     console.log();
}
console.log();

// ! three
let ascii = 65
for(let i = 1 ;  i <= n ; i++){
    for(let j = 1 ; j <= i ; j++){
        process.stdout.write(String.fromCharCode(ascii) +" ");
    }
     console.log();
}
console.log();


// ! four
for(let i = 1 ;  i <= n ; i++){
    for(let j = 1 ; j <= i ; j++){
        process.stdout.write(String.fromCharCode(ascii) +" ");
        ascii++
    }
     console.log();
}
console.log();




// ! five
for(let i = 1 ;  i <= n ; i++){
    for(let j = 1 ; j <= i ; j++){
        process.stdout.write("* ");
    }
     console.log();
}

for(let i = n ;  i >= 0 ; i--){
    for(let j = i-1 ; j >= 1 ; j--){
        process.stdout.write("* ");
    }
    console.log();
}