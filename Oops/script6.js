// // single inheritance
// class Student {
//     constructor(fn,ln,age){
//         this.firstName = fn
//         this.lastName = ln
//         this.age = age
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Teacher extends Student {
//     constructor(fn,ln,age,salary){
//         super(fn,ln,age)
//         this.salary = salary
//     }
//     displaysalary(){
//         console.log(this.salary)
//     }
// }
// let amol = new Teacher("suvarna","prakash",27,33)
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.age)
// console.log(amol.salary)
// amol.displayName
// amol.displaysalary

//program 2 multi-level
class Grandfather {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName  = ln
    }
    displayGname(){
        console.log(this.firstName + this.lastName)
    }
}
class Father extends Grandfather{
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn
    }
    displayFname(){
        console.log(this.fname + this.lastName)
    }
}
class Son extends Father {
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sname = ssn
    }
    displaySname(){
        console.log(this.sname + this.lastName)
    }
}
let suvarna = new Son("chandrabhan","rahane","ashok","suvarna")
suvarna.displayGname()
suvarna.displayFname()
suvarna.displaySname()

// program 3

class Mother {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayMname(){
        console.log(this.firstName + this.lastName)
    }
}
class Soni extends Mother {
    constructor(fn,ln,sn){
        super(fn,ln)
        this.sname = sn
    }
    displaySname(){
        console.log(this.sname + this.lastName)
    }
}
class Daughter extends Mother{
    constructor(fn,ln,dn){
        super(fn,ln)
        this.dname = dn
    }
    displayDname(){
        console.log(this.dname + this.lastName)
    }
}
let amolR  = new Soni("mangal","rahane","amol")
let suvarnaR = new Daughter("mangal","rahane","suvarna")

amolR.displaySname()
suvarnaR.displayDname()