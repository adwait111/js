// https://reqres.in/api/users/2

function getUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json
        })
        .then(function (response) {
            return response.data
        })

}
function getUserInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("bye")
        })
    })


}

// promise combinator 
// promise.all()

async function GetUserAll() {
    try {
        let a = await Promise.all([
            getUser(1),
            getUser(2),
            getUserInfo()
        ])
        console.log(a)
    }
    catch {
        console.log("erroe occur")
    }
}

//GetUserAll()

// all settle()

async function getUserAllSettled(id1,id2,id3){
    let b = await Promise.allSettled([
        getUser(id1),
        getUser(id2),
        getUser(id3),
        getUserInfo()
    ])
    console.log(b)
}
//getUserAllSettled(1,2,3)

// promise.race()

async function getUserRace(id){
    try{
        let a = await Promise.race([
            getUser(id),
            getUserInfo()
        ])
        console.log(a)
    }
    catch{
        console.log("Error occured")
    }

}

//getUserRace(1)

async function getUserAny() {
    let a = await Promise.any([
        getUserInfo(),
        getUser(1),
        getUser(2),
    ])
    console.log(a)

}
getUserAny()