// object literal 

let amol = {
    firstName: "amol",
    lastName: "rao",
    age: 34,
    rollNo: 53
}
// retrive
// update 
// add
// delete

// function constructor 

function Person(fn, ln, ag, rn) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rn
}

let amole = new Person("amol", "rao", 34, 55)
let suvarna = new Person("suvarna", "chaskar", 55, 66)
console.log(amole)

// ES6 class

class PersonA {
    firstName
    lastName
    age
    rollNo
}

let monika = new PersonA()
console.log(monika)

// accessing the property and updating it outside the class
monika.firstName = "monika"
monika.lastName = "gavhane"
monika.age = 24
monika.rollNo = 55
console.log(monika)

// Es6 class with constructor
class PersonD {
    constructor(fn, ln, ag, rn) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
    }
}

let kaveri = new PersonD("kaveri", "gunjal", 65, 56)
console.log(kaveri)

// object literal 
let nikita = Object.create({})
console.log(nikita)
nikita.firstName = "nikita"
nikita.lastName = "randhe"
nikita.age = 65
nikita.rollNo = 33
console.log(nikita)

//object literal
let amolR = {
    firstName: "amol",
    lastName: "rahane",
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
amolR.display()
//object literal
let suvarana = {
    firstName: "suvarna",
    lastName: "chaskar",
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}
suvarana.display()

// function constructor 

function PersonG(fn, ln) {
    this.firstName = fn
    this.lastName = ln
    this.display = function () {
        console.log(this.firstName + this.lastName)
    }

}

let suvarnaR = new PersonG("suvarnaR","chaskarR")
console.log(suvarnaR)

suvarnaR.display()

// prototype inheritanace 
//every object has one_proto_==parent.prototype
console.log(suvarnaR._proto_==PersonG._prototype)

let names = ["suvarna","ram","sham"]
console.log(names)


console.log(names._proto_===Array.prototype)