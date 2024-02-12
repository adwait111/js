//setting this keyword manually
// bind(),call,apply

//object
// let info = {
//     firstName:"suvarna",
//     lastName:"chaskar",
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let info2 = {
//     firstName:"amol",
//     lastName:"rahane"
// }

// let info3 = {
//     firstName:"sarika",
//     lastName:"pansare",
// }

// let info4 = {
//     firstName:"ram",
//     lastName:"dani"
// }
// console.log(info.firstName)
// console.log(info['lastName'])
// info.displayName()

// //let fn = info.displayName
// // let fn = function(){
// //     console.log(this.firstName + this.lastName)
// // }
// // fn()

// //fn = fn.blind(info2)
// //let fn = function(){
//     // //     console.log(info2.firstName + info2.lastName)
//     // // }
//    // fn()

// // let fn = function(){
// //     console.log(info3.firstName + info3.lastName)
// // }
// // fn = fn.bind(info3)
// // fn()

let  car1 = {name:"BMW",color:"white"}
let  car2 = {name:"Audi",color:"Blue"}
let  car3 = {name:"Skoda",color:"Red"}
let  car4 = {name:"Polo",color:"Matt black"}

let displayColor = function(x){
    console.log(this.color)
    console.log(x)
}
// displaycolor()
displayColor.call(car1,"hello")
displayColor.call(car2,"hi")
displayColor.call(car3,"bye")
displayColor.call(car4 ,"bye bye")

let  car5 = {name:"BMW",color:"white"}
let  car6 = {name:"Audi",color:"Blue"}
let  car7 = {name:"Skoda",color:"Red"}
let  car8 = {name:"Polo",color:"Matt black"}

let  displayName =  function(a,b,c,d,e){
    console.log(this.name)
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
}
displayName.apply(car5,[11,22,33,-90,76,77,99,66])