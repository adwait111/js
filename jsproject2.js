// Nullish oprator ??

// undefined and null

// program 1 
let variable = undefined;
let variable1 = "hello world"

let result1 = variable??"default"
let result2 = variable1?? "default"
console.log(result1)
console.log(result2)


// NUll coalesing operator 
// null, undefined ,"",7<2

let variable3 = null
let variable4 = "hello world"
let variable5 = 5 < 2

let result3 = variable3 || "default-a"
let result4 = variable4 || "default-b"
let result5 = variable5 || "default-c"

console.log(result3)
console.log(result4)
console.log(result5)

// short circuit

// &&

let a = "suvarna"&& "chaskar"
let b = 6 < 7 && "chaskar"
let c = 6 < 7 && 8 > 9
let d = 6 == 6 && null

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// ||
let e = 8 > 9 || "hello"
let f = 8 < 9 || "hello"
let g = "suvarna"|| 8 < 5
console.log(e)
console.log(f)
console.log(g)

function greet(name){
    if(name){
        console.log("hello"+name)
    }
    else{
        console.log("hello guest")
    }
    name = name || "guest"
console.log("hello" + name)
}
greet("suvarna")

greet()

