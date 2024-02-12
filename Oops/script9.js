//
// // lexical scope
// function addB(){
//     let x = 10
//     let y = 5
//     console.log(x + y)
//     function addC(){
//         let s = 10
//         let t = 5

    
//         function addE(){
//             let q1 = 7
//             console.log(x+y+s+t)
//         }
//         addE()
//     }
//     addC()
// }
// addB()

// //program 1 
// // lexical scope
// function addA(){
//     let a = 10
//     let b = 5
//     console.log(a + b)
//     function addB(){
//         let s = 9
//         let t = 6
//         console.log(a + b)
//         console.log(s + t)
//         function addC(){
//             console.log(a+b+s+t)
//         }
//         addC()
//     }
//     addB()
// }
// addA()

// //program 2
// function addE(){
//     let x = 10 
//     let y = 5
//     return x +y
//     console.log("hello")
// }
// let q2 = addE()
// console.log(q2)

// Closures
// program 3
// function addF(){
//     let a = 10
//     let b = 5
//     return function(){
//         console.log(a+b)
    
//     }
// }

// let q3 = addF()
// console.log(q3)

// function declaration
function addE(x,y){
    return x +y
}
let q4 = addE(12,4)
console.log(q4)

//function expression
let addFa = function(x,y){
    return x + y
}
let q5 = addFa(2,1)
console.log(q5)
console.log(addFa)

// arrow function 
let addG = (x,y)=>{
    return x + y
}
let q6 = addG(2,1)
console.log(q6)
console.log(addG)

// program 3
//closures
function addF(){
    let a = 10
    let b = 5
    return function(){
        return a + b
    }
}
let q3 = addF()
let q33 = q3()
console.log(q33)