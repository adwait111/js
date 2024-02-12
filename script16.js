// array 
let names = ["chinmay","sarika","poorva","ram"]
//retrive
console.log(names[0])

// add
names.push("sona")
names.unshift("mona")
console.log(names)

//update
names[1]= "amol"
console.log(names)

// delete
names.pop()
names.shift()
console.log(names)

//loop
let cities = ["pune","nagpur","mumbai","banglore","kolkata"]
for(let i = 0 ;i < cities.length ;i++){
    console.log(cities[i])
}

let t = cities.length
let i = 0
while(i < t){
    console.log(cities[i])
    i++
}

// program 3
let info3 = ["suvarna","chaskar",27,55]
let info4 = {
    firstName:"suvarna",
    lastName:"chaskar",
    age:27,
    rollNo:55
}
//retrive(dot notation and bracket notation)
console.log(info4.firstName)
console.log(info4['firstName'])

//update(dot notation and bracket notation)
info4.firstName = "ram"
info4['firstName'] = 'mona'


// add(dot notation and bracket notation)
info4.city = 'pune'
info4['language'] = "hindi"
console.log(info4)

//delete(dot notation and bracket notation)
delete info4.firstName
delete info4['lastName'] 
console.log(info4)

let vehicle = {
    color:"red",
    type:"sedane"
}
console.log(vehicle.color)
vehicle.color = "blue"
vehicle.reg = 345
delete vehicle.color
//console.log(vehicle)

console.log(vehicle['color'])
vehicle['color'] = "blue"
vehicle['reg'] = 345
delete vehicle['color']
//console.log(vehicle)

vehicle = {
    color:"red",
    type:"sedane",
    regNo:123
}

//dot notation and bracket notation
for(let prop in vehicle){
    console.log(prop,vehicle[prop])
}