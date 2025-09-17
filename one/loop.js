for(let a = 0 ; a < 10 ; a++){
    console.log("Shariyer shazan ++ " , a) // ouput - "Shariyer shazan ++ " 10 times..
}
for(let a = 10 ; a > 0 ; a--){
    console.log("Shariyer shazan --" , a) // ouput - "Shariyer shazan -- " 10 times..
}



let b = 0
for( ; b <= 10 ; b++){
    console.log(b);
}
console.log("Value of b after loop finished: " , b) // output- Value of b after loop finished: 11. // ! because b define outside the loop, and Increment first and then check the conditions, so value already incremented.. and ta value of b is 11..


// for(;;){
//     console.log("infinity loop") // ! output - infinity loop * infinity times
// }

// for(let c = 0 ; c<=10 ; ){
//     console.log("infinity") // ! output - infinity loop * infinity times
// }


// while(1){
//     console.log("infinity") // ! output - infinity loop * infinity times
// }


// for(const d = 0 ; d<=10 ; d++){
//     console.log(d) // ! it's will be error , because const can't be change.. only var ans let can be change
// }


let sum = 0;
for(let e = 1 ; e<= 100; e++){
     sum += e
}
console.log("1-100 sum = " , sum); // output - 1-100 sum =  5050


let fact = 1;
for(let f = 1 ; f <= 10 ; f++){
    fact *= f
}
console.log(`1-10 factorial = ${fact}`) // output - 1-10 factorial = 3628800



