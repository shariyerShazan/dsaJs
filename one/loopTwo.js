let x = 34;
let isEven = true
for(let i = 1 ; i <= x/2 ; i++){
    if(x%i ===0){
        isEven = true
    }else{
        isEven = false
    }
}
console.log(`${x} is an ${isEven? "even number" : "odd number"}`)