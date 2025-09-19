let arr = [11, 22 , 54 , 94 , 67 , 49 , 39 , 59 , 101 , 93 , 102];
let max = Math.max(arr[0] , arr[1]);
let secondMax = Math.min(arr[0] , arr[1]);


// second max 
for(let i = 2 ; i < arr.length ; i++){
     if(arr[i] > max){
        secondMax = max ;
        max = arr[i]
     } else if (arr[i] > secondMax) {
           secondMax = arr[i]
     }
}
console.log(secondMax) // output - 101  