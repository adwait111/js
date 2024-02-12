// method -- action and return type
let city = "pune"
// length

let a1 = city.length
console.log(a1)

// touppercase()
let a2 = city.toUpperCase()
console.log(a2)

//tolower case()
let city2 = 'NAGPUR'
let a3 = city2.toLowerCase()
console.log(a3)

// includes()
let city3 = "jaipur"
let a4 = city3.includes('r')
let a5 = city3.includes('pur')
console.log(a4)
console.log(a5)

// indexof()
let city4 = "chandrapur"
// 0  1  2  3  4  5  6  7  8  9  
// c  h  a  n  d  r  a  p  u  r
//-10 9 -8 -7 -6 -5 -4 -3 -2 -1
let a6 = city4.indexOf("a")
let a7 = city4.indexOf('d')
console.log(a6)
console.log(a7)

//slice()
console.log(city4.slice(2,5))
console.log(city4.slice(1,6))
console.log(city4.slice(-9,-1))
console.log(city4.slice(-5))
console.log(city.slice(-1,-5))

//startwith()
let city5 = "wardha"
let a8 = city5.startsWith("w")
let a9 = city5.startsWith('war')
let a10 = city5.startsWith('D')
console.log(a8)
console.log(a9)
console.log(a10)

//endswith()
let city6 = "nashik"
let a12 = city6.endsWith('ik')
let a13 = city6.endsWith('hik')
let a14 = city6.endsWith('Hik')
console.log(a12)
console.log(a13)
console.log(a14)

//trim()
let city7 = " goa "
let a15 = city7.trim()
console.log(a15)

//trimstart
let a16 = city7.trimStart()
console.log(a16)

// trimend()
let a17 = city7.trimEnd()
console.log(a17)

// split()
let info = ["suvarna","chaskar",9527335021]
let a18 = info.join('-')
console.log(a18)


let a19 = a18.split('-')
console.log(a19)

// concat()
let firstname = "suvarna"
let lastname = "chaskar"
c = firstname.concat(" ").concat(lastname)
console.log(c)

// repeat()
let str = "abc"
let b = str.repeat(4)
console.log(b)

// charAt()//index of letter , charCodeAt()//ASCII VALUE

let city10 = "Nagpur" 
let e = city10.charAt(2)
console.log(e)
let g = city10.charCodeAt(0)
console.log(g)



