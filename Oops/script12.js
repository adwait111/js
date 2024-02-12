
// let x = 10 
// console.log(x)
// difference between let var and const with respect to assignment

let x = 10 
console.log(x)
x = 300 
console.log(x)

const h1 = 100 
console.log(h1)
//h = 900

var y = 90
console.log(y)
y = 9000
console.log(y)
//--------------------------------------------->

//difference between let const and var with respective to scope 
//let is blocked scope

// program 2
// {
//     let k = 100
//     console.log(k)
// }
// console.log(k)

// progarm 3 

let k = 900
{
    let k = 100
    console.log(k)
}
console.log(k)

//program 4
let j = 1000

{
    j = 9000
    console.log(j)
}
console.log(j)

// program 5

let l = 1000
l = 900
console.log(l)
{
    let l = 800
    console.log(l)
}
console.log(l)

//const is also blocked scope
// program 5
const h = 100
{
    console.log(h)
}
console.log(h)

///program 6
// const h2 = 111
// {
//     h2 = 1111
//     console.log(h2)
// }
// console.log(h2)


// program 8

const h2 = 111
{
    const h2 = 1111
    console.log(h2)
}
console.log(h2)

// program 9 
// var is function scoped

var h3 = 100
function addC(){
    console.log(h3)//100
    h3 = 99
    console.log(h3)//99
}
console.log(h3)//100
addC()
console.log(h3)//99

// program 10
var h3 = 100
function addC(){
    var h3 = 99
    console.log(h3)//99
    {
        let h3 = 900
        console.log(h3)//900
    }
    console.log(h3)//99
}
console.log(h3)//100
addC()
h3 = 500
console.log(h3)//500
