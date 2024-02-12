//set ==> datatype => array => unique value collection 

let mySet = new Set()
console.log(mySet)

//add()
let a1 = {a:10,b:20}
mySet.add(1)
mySet.add('suvarna')
mySet.add(a1)
mySet.add(1)// not accept duplicted value
console.log(mySet)

// has()
console.log(mySet.has(1))
console.log(mySet.has(a1))
console.log(mySet.has("true"))

console.log("===================")

// delete()
// console.log(mySet.delete("mayuri"))
// console.log(mySet)

// console.log(mySet.delete(false))
// console.log(mySet)

// clear()
// mySet.clear()
// console.log(mySet)

// forEach()
mySet.forEach(function(val){
    console.log(val)
})

let mySet1 = new Set([1,2,3,4,5,"true","false",null])
mySet1.forEach(function(a1){
    console.log(a1)
})

// key()

console.log(mySet1.keys())
for(let s1 of mySet1.keys()){
    console.log(s1)
}

// value ()
console.log(mySet1.values())
for(let d1 of mySet1.values()){
    console.log(d1)
}

// entries()[1,1]
console.log(mySet1.entries())
for(let [a,b] of mySet1.entries()){
    console.log(a,b)
}

// size property 
console.log(mySet1.size)


let arr = [11,22,33,44,55,11,22]
let setArr = new Set(arr)
console.log(setArr)
console.log(Array.from(setArr))