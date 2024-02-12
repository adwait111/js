function getUserInfo(id){
   return fetch(`https://reqres.in/api/users/${id}`)
   .then(function(response){
    console.log(response)
    return response.json
   })
   .then(function(response){
    return response.data
   })
}
function getUserInfo2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("i am rejected")
        },1000)
    })
}
//program 1 
// Promise.all([
//     getUserInfo(1),
//     getUserInfo(2),
//     getUserInfo(3),
//     getUserInfo()
// ])
// .then(function(response){
//     console.log(response)
// })
// .catch(function(err){
//     console.log(err)
// })

// // program all settle()\

// Promise.allSettled([
//     getUserInfo(1),
//     getUserInfo(2),
//     getUserInfo2(),
//     getUserInfo(3)
// ])
// .then(function(response){
//     console.log(response)

// })


//promise.race

// promise.race([
//     getUserInfo(1),
//     getUserInfo2()
// ])
// .then(function(response){
//     console.log(response)
// })
// .catch(function(response){
//     console.log("i am rejected")
// })

// promise.any()
Promise.any([
    getUserInfo2(),
    getUserInfo(1),
    getUserInfo(2)
])
.then(function(response){
    console.log(response)
})