let obj = {
    firstName:"suvarna",
    lastName:"chaskar"
}
//Object ------>property ----string
// number,boolean,string,object,htmlelement

let mapA = new Map()
console.log(mapA)
console.log(typeof mapA)

// object ------> properties and method

let mapB = new Map([
    [1,"manager"],
    [2,"customer"],
    [3,"admin"],
    [4,"support"]
])
console.log(mapB)

// properties 
let mapC = new Map()
mapC.set(1,"admin")
mapC.set("firstName","suvarna")
mapC.set("lastName","chaskar")
mapC.set("true","can drive")
console.log(mapC)
let q1 = mapC.size
console.log(q1)

// has ()
let q2 = mapC.has("true")
console.log(q2)

// clear()
// let q3 = mapC.clear()
// console.log(q3)

// get ()
let q3 = mapC.get("firstName")
console.log(q3)

// foreach()
mapC.forEach(function(v,k){
    console.log(v,k)
})

// keys()
for(let key of mapC.keys()){
    console.log(key)
}

// value ()
for(let val of mapC.values()){
    console.log(val)
}

// entries()

for(let item of mapC.entries()){
    console.log(item)
}