// strong number
let num = 145;
let copyNum = num;
let sum = 0;
while(num > 0){
        let remain = num % 10 
        let factorial = 1;
        for(let i = 1; i <= remain; i++){
            factorial *= i
        }
        sum += factorial
        num = Math.floor(num/10)
}
if(sum === copyNum){
    console.log("It's a strong number"); // output- "It's a strong number"
}else {
    console.log("it'a not a strong number")
}





do{
    console.log("Running do") // output - "Running do" //! do-while always run one time.. it's run one time and then check the conditions..
}while(false)





let randomNum = Math.floor(Math.random()*100  + 1);
let guessNum = -1
while(guessNum === randomNum){
    guessNum = Number(prompt("Enter your guess number here:"));
    if(isNaN(guessNum) || guessNum < 1 || guessNum > 100){
            console.log("Try again between 1-100 number")
    }
    if(guessNum < randomNum){
        console.log("too low, try again");
    }else if (guessNum > randomNum){
        console.log("too high, try again");
    }else{
        console.log("Congrats, the number is" , randomNum)
    }
}