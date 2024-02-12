let firstName = "suvarna"
let lastName = "chaskar"
let middleName = "prakash"

// object --- properties and methods
// string value store by index
let city = "pune"
let q1 = city.length
console.log(q1)

// touppercase() all letters in capital letters
let city2 = "Nagpur"
q2 = city2.toUpperCase()
console.log(q2)

// toLowercase() all letters in small letters
let city3 = "Nashik"
q3 = city3.toLowerCase()
console.log(q3)

//includes() return in boolean value
let city4 = "chandrapur"
let q4 = city4.includes('ch')
console.log(q4)
let q5 = city4.includes('A')
console.log(q5)

// indexof() find out the letters index value

let city5 = "jaipur"
// 0  1  2  3  4  5
// j  a  y  p  u  r
let q6 = city5.indexOf('p')
console.log(q6)
let q7 = city5.indexOf('b')
console.log(q7)

// startswith() return is boolean value
let city6 = "kanpur"
let q8 = city6.startsWith('k')
console.log(q8)
let q9 = city6.startsWith('K')
console.log(q9)


// endwith() return is boolean value
let city7 = "udaipur"
let q10 = city7.endsWith('pur')
console.log(q10)
let q11 = city7.endsWith('R')
console.log(q11)

// charAt()
// 0  1  2  3  4  5
// i  n  d  o  r  e
let city8 = "indore"
let q12 = city8.charAt(6)
console.log(q12)

//trim()
let city9 = " goa "
let q13 = city9.trim()
console.log(q13.length)

//trimStart()
city9 = " goa "
let q14 = city9.trimStart()
console.log(q14.length)

//trimEnd()
city9 = "goa "
let q15 = city9.trimEnd()
console.log(q15.length)

//spilt()
let info = ["suvarna","chaskar","9527335021"]
let q16 = info.join('-')
console.log(q16)

let q17 = q16.split('-')
console.log(q17)






