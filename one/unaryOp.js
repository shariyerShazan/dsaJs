let i = 12

let b= i++ + ++i // 13 + 13
console.log(b) // output - 26


let c = true
c++
console.log(c) // output - 2
console.log(--c) // output - 1

let d = false 
d++
console.log(d) // output - 1


let e = false
e = !e++
console.log(e) // output - true


let f = false
f = !f
f++
console.log(f) // output - 2



// ! console.log(15++) // output - error



// pre increment and post increment
let g = 10
console.log(g++) // output - 10
console.log(++g) // output - 12
console.log(++g) // output - 13


let h = 10
console.log(++h) // ouput = 11



// ! decreement is same like increment just value decreses -1
// ! can't increment or decreement on constant like ++10 or --10 
// !  we can increment or decreement variable++ or --variable