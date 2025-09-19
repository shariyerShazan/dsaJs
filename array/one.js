// ! array can storye multiple data in a linear data structure..

let arr = [];
arr.push(10);
arr.push(20);
arr.push(30); //! pushing element in the last of the array
console.log(arr) // output - [ 10, 20, 30 ]

arr.pop() // ! deleting element from the last of the array
console.log(arr) // output - [ 10, 20]


arr.push("shazan")
console.log(arr) // output - [ 10, 20, 'shazan' ]
console.log(arr[2]) // output - "shazan" //! give the value of the index no of the array

arr[2] = 30;
console.log(arr) // output - [ 10, 20, 30 ] // ! repleace the element of the array

arr[10] = 77;
console.log(arr) // output - [ 10, 20, 30, <7 empty items>, 77 ] //! theke are empty element, because we replace element which index is 7..


let newArr = [5 , 10 , 30];

for(let i = 0 ; i < newArr.length ; i++){
    console.log(newArr[i]) ; // output - 5  10   30 ....
}

