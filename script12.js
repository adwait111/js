//program 1 
//
let birthYear = [1989,1990,1991,1992]
let ages = [] // [34,33,32,31]

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    let a = 2023 - birthYear[i] //
    ages.push(a)
}
console.log(ages)

let q1 = birthYear.map(function(el,index,arr){
   // console.log(el,index,arr)
   return 2023 - el
})
console.log(q1)

let n = [11,22,33,44,55]
let q2 = n.map(function(el,index,arr){
    return el + 1
})
console.log(q2)



// filter()
let j = [11,22,33,44,55,66,11,22] // [44,55,66]
let above40 = []
for(let i = 0 ; i < j.length ; i++){
    if(j[i] > 40){
        above40.push(j[i])
    }
}
console.log(above40)

let q3 = j.filter(function(el,index,arr){
    return el > 40
})
console.log(q3)


let transactions = [100,-90,55,66,88,-99,88,99,-199]
let withDrawl = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(withDrawl)
let deposit = transactions.filter(function(el,index,arr){
    return el >0 
})
console.log(deposit)

// program 3

let tl = [11,22,33]
let total = 0

for(let i = 0 ; i < tl.length ; i++){
    // console.log(i)
    //console.log(tl[i])
    total = tl[i] + total
}
console.log(total)

let q4 = tl.reduce(function(acc,el,index,arr){
    return acc + el // acc ---- 11
},0)
console.log(q4)


// forEach() 

let cities = ["pune","mumbai","banglore","kolkata"]
cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})

// some() , every() , find() , findindex()

//             0  1  2   3 4  5  6   7  8  9  10  11 
let numbers = [11,22,33,44,55,66,22,33,44,55,677,78]
let q6 = numbers.filter(function(el,index,arr){
    return el > 50
})
console.log(q6)

let q7 = numbers.find(function(el,index,arr){
    return el > 50
})
console.log(q7)

let q8 = numbers.findIndex(function(el,index,arr){
    return el > 50
})
console.log(q8)


let mks = [1,22,33,44,55,33,22,33]
let q9 = mks.every(function(el,index,arr){
    return el> 10
})
console.log(q9)

let q10 = mks.some(function(el,index,arr){
    return el > 50
})
console.log(q10)

//--------------------------------------------------------->


// flat()
//                    0                        1                 2
//                0        1          0         1          0          1
let state = [  ["wardha","nagpur"],["chennai","mysore"],["bhopal","indore"]]
console.log(state[0][1])
console.log(state[1][0])
console.log(state[2][1])
let q11 = state.flat()
console.log(q11)

// slice()
//              0        1         2        3          4         5
let citiess = ["pune","mumbai","banglore","chennai","kolkata","mysore"]
//              -6        -5      -4        -3         -2         -1
//citiess.slice(startIndex,EndIndex(not included))
//console.log(citiess[0])
console.log(citiess.slice(1))
console.log(citiess.slice(2,5))
console.log(citiess.slice(0,-1))
console.log(citiess.slice(-5,4))
console.log(citiess.slice(-5,-1))
console.log(citiess.slice(-1,-5))
console.log(citiess.slice(-2))

// splice()
//               0        1      2        3       4        5
let animals = ["tiger","lion","bullock",'camel',"rabbit","snake"]
// animals.shift()
// animals.pop()
//animals.splice(index,numberOfElmentstoBeDeleted,rep1,rep2)
//animals.splice(3,3)

animals.splice(2,2,"bear","frog","cat")
console.log(animals)

// fill()
//              0  1  2  3  4  5  6   7 8
let numbersB = [11,22,33,44,55,66,77,88,99]
numbersB.fill(undefined,4,7)
console.log(numbersB)

// sort()
let country = ["india","srilanka","bangladesh","japan"]
country.sort()
console.log(country)