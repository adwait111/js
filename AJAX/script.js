// sync code 
// program 1



// program 3
// user creat  -------- ger id -------------- get info


function getUserinfo(){
    setTimeout(function(){
        console.log("creat user")
    },3000)

    setTimeout(function(){
        console.log("get id")
    },2000)

    setTimeout(function(){
        console.log("get info")
    },1000)
}
//get user info ()
// asyn function -----sync
// call back hell ------> promises
// tightly coupled and not usable

function getUserinfo(){
    setTimeout(function(){
        console.log("user creat")
        setTimeout(function(){
            console.log("get id")
            setTimeout(function(){
                console.log("get info")
            },1000)
        },2000)
    },3000)
}
 // getuserinfo()


 // promises =====> reject , resolve , pending


 // promises


 let pro = new Promise(function(resolve,reject){
    let a = 10
    let b = 10
    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }
 })

 //consuming the promise 

 pro.then(function(str){
    console.log(str)
 },
 function(str){
    console.log((str))
 })
 

