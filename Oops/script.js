//program  1
//object literal
//let suvarna = {
//    firstname:"suvarna",
//    lastname: "chaskar",
//    age:27
//    roll no:23
//    displayName:function(){
// console.log(this.firstname + this.lastname)
//}
//}

// suvarna.displayname()
// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:34,
//     rollNo:57,
//     displayName:function(){
//     console.log(this.firstName + this.lastName)
//}
//}
// amol.displayName()

//console.log(amol.firstName)
//console.log(amol['firstName'])

//amol.city = "pune"
//amol['language']= "hindi"

//delete amol.city
//delete amol['language']


//program 2 
class person {
    firstName
    lastName
    age
    roll

    displayName() {
        console.log(this.firstName + this.lastName)
    }
}
let amol2 = new person()
let suvarna2 = new person()
console.log(amol2)
console.log(suvarna2)

amol2.firstName = "amol2"
amol2.lastName = "rao2"
amol2.age = 55
amol2.roll = 88
console.log(amol2)

suvarna2.firstName = "suvarna2"
suvarna2.lastName = "chaskar2"
suvarna2.age = 27
suvarna2.roll = 28

amol2.displayName()
suvarna2.displayName()

class person2 {
    constructor(fn,ln,ag,rn){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
    }
    
    displayName(){
        console.log(this.firstName + this.lastName)
    }

}
let amol3 = new person2("amol3","rao3",34,55)
let suvarna3 = new person2("suvarna3","chaskar3",26,56)
console.log(amol3)
console.log(suvarna3)
amol3.displayName()
suvarna3.city = "pune"
suvarna3.displayName()

class person3 {
    setfirstName(fn){
        this.firstName = fn
    }
    setlastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.age = ag
    }
    setRollNo(rn){
        this.rollNo = rn
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let suvarna4 = new person3()
console.log(suvarna4)
suvarna4.setfirstName("suvarna4")
suvarna4.setlastName("chaskar4")
suvarna4.setAge(45)
suvarna4.setRollNo(33)
suvarna4.displayName()