const prompt = require("prompt-sync")();
let n = prompt("Enter a number: ")


// ----
for(let i = 1 ; i <= n ; i++){
    for(let j = 1 ;  j<= n-i  ; j++){
        process.stdout.write("  ");
    }
    for(let j = n ;  j >= 1 ; j--){
        process.stdout.write("* ");
    }
    console.log()
}
console.log()



// ! triangle here
for(let i = 1 ; i <= n ; i++){
    for(let j = 1 ;  j<= n-i  ; j++){
        process.stdout.write("  ");
    }
    for(let j = 1 ;  j <= i ; j++){
        process.stdout.write("* ");
    }
    console.log()
}