//declaration 
function additionA(x,y){
    console.log(x+y)
}
let q1 = additionA(12,4)
console.log(q1)

//function expression

let additionB = function(x,y){
    return x + y
}
let a = additionB(12,4)
console.log(a)

// arrow function 

// let additionC = (x,y)=> x + y
// let b = additionC(13,4)
// console.log(b)

// var firstName = "ram"
// var lastName = "dani"

// let info = {
//     firstName:"suvarna",
//     lastName:"chaskar",
//     display:function(){
//         console.log(this)
//         console.log(this.firstName + this.lastName)
//         let display2 = function(){
//             //this ----> window
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }

// }
// info.display()

// program 2 
// let info = {
//     firstName:"su* varna",
//     lastName:"chaskar",
//     display:function(){
//         //this ----->info
//         console.log(this)
//         console.log(this.firstName + this.lastName)
//         let display2 = ()=>{
//             //this == display
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }
// info.display()

// let info = {
//     firstName:"suvarna",
//     lastName:"chaskar",
//     display:function(){
//         //this => info
//         console.log(this.firstName + this.lastName)
//         let display2 = ()=>{
//             // this == display
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }
// info.display()

// this => win+-
//, +let info = {
//     firstName:"suvarna",
//     lastName:"chaskar",
//     display:() =>{
//         //this = > window
//         console.log(this.firstName + this.lastName)
//         let display2 = ()=>{
//             //this == window
//             console.log(this.firstName + this.lastName)
//         }
//         display2()
//     }
// }
// info.display()

function addition(...e){
    console.log(e)
    return e.reduce(function(acc,el){
        return acc + el
    },0)
}
let q3 = addition(12,3,6,5,4,7,8,9,1,2,3,4)
console.log(q3)
function additionC(a,...b){
    return b.filter(function(el,index,arr){
        return el > a
    })
}
let q4 = additionC(17,23,4,50,2,17,14,3,5,6,7,8)
let q5 = additionC(5,23,4,50,2,17,14,3,5,6,7,8)
console.log(q4)
console.log(q5)

/// spre  operaters
let names = ["suvarna","amol","ram","rajesh","rohit"]
function printFirstTwoName(a,b,c){
    console.log(a)
    console.log(b)
}
printFirstTwoName(...names)
