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




// reverse array 
let i = 0 ;
let j = arr.length - 1 ;
while(i !== j){
    let temp = arr[i] ;
    arr[i] = arr[j] ;
    arr[j] = temp ;
    i++ 
    j--
}
console.log(arr) // output - [ 102,  93, 101,  59,  39, 49, 102, 102, 102, 102, 11 ]




// 
let newArr = [ 0, 1 , 1 ,  0 , 1 , 0 , 1 , 0  , 0 , 0 , 1 , 1 , 0 , 1 ,0 , 1];
let x = 0 ;
let y = 0 ;
while(x < newArr.length){
    if(newArr[x] == 0){
        let temp = newArr[x] ;
        newArr[x] = newArr[y] ;
        newArr[y] = temp ;
        y++
    }
    x++
}
console.log(newArr) // output - [  0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1  ]