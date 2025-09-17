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


for(;;){
    console.log("infinity loop") // output - infinity loop * infinity times
}

