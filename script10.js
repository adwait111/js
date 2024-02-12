// object 

// properties and method 
// humun-------amol
// properties ----- weight,height,color,gender
//methods---------walk(),talk),sleep()

// gym - method
// action - excercise 
// return - health

// program 
//               0       1        2        3
let cities  = ["pune","nagpur","mumbai","banglore"]
let q1 = cities.length
console.log(q1)

//push() =>new length

let fruits = ["apple","mango","banana"]
let q2 = fruits.push("chikoo")
console.log(q2)
console.log(fruits)

//unshift  ==> new length
let fruits2 = ["apple","mango","banana"]
let q3 = fruits2.unshift("papaya")
console.log(q3)
console.log(fruits2)

// pop() => print last element
let animals = ["tiger","lion","rabbit","snake"]
let q4 = animals.pop()
console.log(animals)
console.log(q4)

//shift()
let animals2 = ["tigers","lion","leopard","snake"]
let q5 = animals2.shift()
console.log(q5)
console.log(animals2)

//includes()
let animals3 = ["tiger","lion","leopard","rabbit"]
let q6 = animals3.includes("rabbit")
console.log(q6)

// indexOf()
//                      0      1        2         3
let vegetables = ["cabbage","tomato","potato","brinjal"]
let q7 = vegetables.indexOf("tomato")
let q8 = vegetables.indexOf("tomato2")
console.log(q7)
console.log(q8)

//at() 

//             0  1  2  3  4
let marks = [11,22,33,44,55]
let q9 = marks.at(3)
 console.log(q9)

 //reverse()
let flowers = ["jasmin","rose","lily"]
let q10 = flowers.reverse()
console.log(q10)

//join()
let info = ["suvarna","chaskar",9527335021]
let q11 = info.join("-")
let q12 = info.join("")
let q13 = info.join("@")
console.log(q11)
console.log(q12)
console.log(q13)

// concat()
let array = [11,22,33]
let arrayB = [44,55,66]
let arrayC = array.concat(arrayB)
console.log(arrayC)

//reduce()
let nums = [11,22,33]
let q14 = nums.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q14)

//filter()
let marksA = [77,66,33,55,88,99]
let q15 = marksA.filter(function(el,index,arr){
    return el > 70
})
console.log(q15)

//forEach()
let cities1 = ["nagpur","wardha","chennai"]
cities1.forEach(function(el,index,arr){
    console.log("welcome" + el)
})

//find()

let numbersB = [12,45,66,88,99,55,33]

//filter()
let above60 = numbersB.filter(function(el,index,arr){
    return el > 60
})
console.log(above60)

let above60FEI = numbersB.findIndex(function(el,index,arr){
    return el > 60
}) 
    console.log(above60FEI)

// every()
let numbers = [1,22,33,44,55,66,77,88]

let aboveAll = numbers.every(function(el,index,arr){
    return el > 10
})
console.log(aboveAll)

//some()
let above100One = numbers.some(function(el,index,arr){
    return el > 70
})
console.log(above100One)

//sort()
let cities2 = ["chennai","banglore","wardha","nagpur"]
cities2.sort()
console.log(cities2)


// slice()
// slice(startIndex, endIndex(not included))
//                0          1         2         3       4
let countries = ["india","pakistan","china","srilanka","japan"]
//                -5         -4        -3      -2          -1
console.log(countries.slice(1))
console.log(countries.slice(1,5))
console.log(countries.slice(-5,4))
console.log(countries.slice(1,-1))
console.log(countries.slice(-4))
console.log(countries.slice(-1,-3))

// splice()
// splice(startIndex,numberOfElementToBedeleted,rpl1,rpl2)
//countries.splice(2,1)
//countries.splice(1,2)
countries.splice(1,2,"UK","USA")
console.log(countries)

//flat()
let states = [

    ["Nagpur","Pune"],     // 0
    ["Jaipur","Udaipur"],  // 1
    ["indore","Bhopal"]    // 2

]
console.log(states[0][1])
console.log(states[1][1])
console.log(states[2][1])
let allCities = states.flat()
console.log(allCities)


// fiil()

let mks = [22,33,44,55,66,77,22,33,55]
mks.fill(undefined,3,7)
console.log(mks)



