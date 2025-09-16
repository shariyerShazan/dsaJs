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
