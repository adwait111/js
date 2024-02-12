// function additionA(){
//     console.log('A')
// }

// function additionB(){
//     console.log('B')
// }
// additionA()
// additionB()

// program 2

// function additionC() {
//     setTimeout(function () {
//         console.log("C")
//     }, 3000)
// }

// function additionD() {
//     setTimeout(function () {
//         console.log("D")
//     }, 2000)
// }
// additionC()
// additionD()

// program 3
// user create     get id     get info

// function getInfo() {
//     setTimeout(function () {
//         console.log("user create")
//     }, 3000)

//     setTimeout(function () {
//         console.log("get id")
//     }, 2000)

//     setTimeout(function () {
//         console.log("get info")
//     }, 1000)
// }

// getInfo()

// call back hell

// function getInfo() {
//     setInterval(function () {
//         console.log("user create")
//         setTimeout(function () {
//             console.log("get id")
//             setTimeout(function () {
//                 console.log("get info")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getInfo()

// solution promise --
// resolve, reject pending

let pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resolve("hello")
    }
    else {
        reject("bye")
    }
})
// consuming the promise

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// program 2

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// program 3 

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute ")
// })

// program 4

// pro
// .then(function(str){
//     console.log(str)
//     return "HI"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })

// function creatUser() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("user create")
//         }, 3000)
//     })
// }

// function getId() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("get id")
//         }, 2000)
//     })
// }

// function getInfo() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("get info")
//         }, 1000)
//     })
// }
// creatUser()
//     .then(function (str) {
//         console.log(str)
//         return getId()
//     })
//     .then(function (str) {
//         console.log(str)
//         return getInfo()
//     })
//     .then(function (str) {
//         console.log(str)
//     })
//     .catch(function () {
//         console.log('rejected')
//     })
//     .finally(function () {
//         console.log("i will always run")
//     })

async function  getUsers(){
    let p1 = await createUser()
    console.log(p1)
    let p2 = await getId()
    console.log(p2)
    let p3 = await getInfo()
    console.log(p3)
}
getUsers()