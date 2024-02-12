//program 1
// var x = 10
// console.log(x)

// program 2 
// console.log(x)
// var x = 100
// console.log(x)

// program 3
// execution steps
// var x
// console.log(x)
// x = 100
// console.log(x)

// console.log(x)
// let x = 10
// console.log(x)

// program 4 
// sayHello()
// function sayHello(){
//     console.log("hello")
// }
// sayHello2()
//  var sayHello2 = function(){
//      console.log("hello")
// }


// var myFunction = "bye"
// function myFunction(){
//     console.logv("hello")
// }
// console.log(typeof myFunction)


// program 5 
// console.log(a)
// console.log(b)

// var a = 10
// let b = 2


function outer(){
    console.log(inner)
    if(true){
        var inner = "inner variable"
    }
    console.log(inner)
}
outer()
