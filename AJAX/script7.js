// function fetchUser(id){
//     return fetch(https://reqres.in/api/users/${id})
//     .then(function(response){
//         console.log(response)
//         if(response.ok){
//             return response.json()
//         }
//         return new Error('request was not successful')
//     })
//     .catch(function(error){
//         console.log(error)
//     })

// }


// Promise combinators

function fetchUser(id) {
    return fetch(`https://reqres.in/api/users/$({id}`)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
}
fetchUser(3)
function getUsers2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let a = 10
            let b = 5

            if (a == b) {
                resolve('hello')
            }
            else {
                reject('bye')
            }

        }, 1000)

    })
}
// Promise.all([
//     fetchUser(1),
//     fetchUser(2),
//     fetchUser(3),
//     getUsers2() // error
// ])
// .then(function(response){
//     console.log(response)
// })


// Promise.allSettled

// Promise.allSettled([
//     fetchUser(3),
//     fetchUser(1),
//     getUsers2()
// ])
// .then(function(response){
//     console.log(response)
// })

// Promise.race()
//Promise.race([
//     fetchUser(3),
//     getUsers2()
// ])
// .then(function(response){
//     console.log(response)
// })


// Promise.any()

Promise.any([
    getUsers2(),
    getUsers2(),
    fetchUser(2),
    fetchUser(1)
])
    .then(function (response) {
        console.log(response)
    })


