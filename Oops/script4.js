// program 1
// class student {
// firstName = "suvarna"
// lastName = "chaskar"
// adharNo = 123

// displayName(){
//   console.log(this.firstName + this.lastName)
//  }
//}
// class Teacher {
//    firstName = "suvarna"
//    lastName = "chaskar"
//    adharNo = 123
//    salary = 10000

//    displayName(){
    //  console.log(this.firstName + this.lastName)
//}
// displaysalary(){
//   console.log(this.salary)
//}
//}

//let amol = new Teacher()
//console.log(amol.firstName)
//nsole.log(amol.lastName)
//console.log(amol.salary)
//console.log(amol.adharNo)

//amol.displayName()
//amol.displaysalary()

//let chinmay = new student()
//console.log(chinmay.firstName)
//console.log(chinmay.lastName)
//console.log(chinmay.adharNo)

// program 2

// class student {
//     firstName = "suvarna"
//     lastName = "chaskar"
//     adharNo = 123

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Teacher extends student {
//     salary = 1000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }
// let amolB = new Teacher()
// console.log(amolB.firstName)
// console.log(amolB.lastName)
// console.log(amolB.adharNo)
// console.log(amolB.salary)
// amolB.displayName()
// amolB.displaySalary()

// program 3
class student {
    constructor(fn,ln,adharNo){
        this.firstName = fn 
        this.lastName = ln 
        this.adharNo = adharNo
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacher extends student {
    salary = 1000
    displaySalary(){
        console.log(this.salary)
    }
}

let suvarna = new Teacher("suvarna s","chaskar",123123)
console.log(suvarna.firstName)
console.log(suvarna.lastName)
console.log(suvarna.adharNo)
console.log(suvarna.salary)
suvarna.displayName()
suvarna.displaySalary()
