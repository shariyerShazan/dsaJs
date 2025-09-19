let arr = [10 , 20 , 30 , 40 , 50 , 60];
let sum = 0
for(let i = 0 ; i< arr.length ; i++){
     sum += arr[i];
}
console.log(sum) // output - 210


let arrTwo = [30 , 45 , 20 , 60 , 40 , 100 , 120 , 50 , 55 , 71];
let max = arrTwo[0]
let min = arrTwo[0]

// max element 
for(let i = 0 ; i < arrTwo.length ; i++){
    if(max < arrTwo[i]){
        max = arrTwo[i]
    }
}
console.log(max) // output - 120

// min element 
for(let i = 0 ; i < arrTwo.length ; i++){
    if(min > arrTwo[i]){
        min = arrTwo[i]
    }
}
console.log(min) // output - 20


