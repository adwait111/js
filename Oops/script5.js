// class Person {
//     constructor(fn,ln){
//         this.firstName  = fn
//         this.lastName = ln
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// let amol = new Teacher("suvarna","chaskar")
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.salary)
// amol.displayName()
// amol.displaySalary()

//single inheritance

class Teacher {
    constructor(fn, ln, salary) {
        this.firstName = fn
        this.lastName = ln
        this.salary = salary
    }
    displayName() {
        console.log(this.firstName + this.lastName)
    }
}
class Professor extends Teacher {
    constructor(fn, ln, salary, spec) {
        super(fn, ln, salary)
        this.specialization
    }
    displaySpec() {
        console.log(this.specialization)
    }
}
let suvarnaC = new Professor("suvarna", "rahane", 12321321, "marathi")
console.log(suvarnaC.firstName)
console.log(suvarnaC.lastName)
console.log(suvarnaC.salary)
console.log(suvarnaC.specialization)
suvarnaC.displayName()
suvarnaC.displaySpec()

// program 
class Grandfather {
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }
    displayGName() {
        console.log(this.firstName + this.lastName)
    }
}
class Father extends Grandfather {
    constructor(fn, ln, ffn) {
        super(fn, ln)
        this.fname = ffn
    }
    displayFName() {
        console.log(this.fname + this.lastName)
    }
}

class Son extends Father {
    constructor(fn, ln, ffn, ssn) {
        super(fn, ln, ffn)
        this.sname = ssn
    }
    displaySName() {
        console.log(this.sname + this.lastName)
    }
}

let chinmay = new Son("manohar", "deshpande", "shirish", "chinmay")

console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.sname)
console.log(chinmay.fname)

chinmay.displayFName()
chinmay.displayGName()
chinmay.displaySName()