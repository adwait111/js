let firstName = 'suvarna'
let lastName = "chaskar"
let middleName = `prakash`

console.log(firstName)
console.log(lastName)
console.log(middleName)

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof middleName)

// program 2
// string concatination

let fname = "suvarna"
let lname = "chaskar"

// my first name is suvarna ane last name is chaskar 

console.log("my firstName is "+fname+" and lastName is "+lname)
console.log(`My firstName is ${fname} My lastName is${lname}`)

// program 3
// string + string ===========>string
// number + string ===========>string
// string + number ===========>string
// number + number ===========>number

let a = 10
let b = 20
let c = "hello"

console.log(a+b+c)
// number + number + string 
// number + string
// 30 + "hello"-----> "30hello"

console.log(c + a + b)
console.log(a+c+b)

// programm 4

let firstNamee = "suvarna"
// string stores the value by index
// 0  1  2  3  4  5  6
// s  u  v  a  r  n  a

console.log(firstName[0])

for(let i = 0 ; i < firstNamee.length ; i++){
    console.log(firstNamee[i])
}
 // print char in reverse 

 for(let i = firstNamee.length - 1 ; i >= 0 ; i--){
    console.log(firstName[i])
 }

 // program 5
 //string ------ object ------ properties and methods
 // 0  1  2  3  4
 // s  a  m  a  y
 let fn = "Samay"
 console.log(fn.length)
 
 // toupperCase()
 let q1 = fn.toUpperCase()
 console.log(q1)

 // toLowerCase()

 let q2 = fn.toLowerCase()
 console.log(q2)

 // includes()

 let q3 = fn.includes('may')
 let q4 = fn.includes('s')
 let q5 = fn.includes('S')

console.log(q3)
console.log(q4)
console.log(q5)

// indexOf()

let q6 = fn.indexOf('S')
console.log(q6)
let q7 = fn.indexOf('s')
console.log(q7)



