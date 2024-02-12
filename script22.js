// object literal
let suvarna ={
    "firstName":"suvarna",
    "lastName":"chaskar",
    "age":24
}

let monika ={
    "firstName":"monika",
    "lastName":"gavhane",
    "age":26
}

// function constructor

function Person(fn,ln,rn){
    this.firstName = fn
    this.lastName = ln
    this.rollNo = rn
}

let Amol = new Person('Amol','rahane',54)
let sonal = new Person("sonal","Pansare",65)
console.log(Amol)
console.log(sonal)

Amol.rollNO = 54
Amol.city = "pune"
console.log(Amol["rollNo"])
delete sonal.firstName
console.log(sonal)
//object literal
// function constructor
// ES6 class
// object.create