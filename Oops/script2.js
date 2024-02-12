class person {
    firstName
    lastName
    age
    roll
    displayName(){
        console.log(this.firstName + this.lastName)
    }

}
let amol = new person()
console.log(amol)
amol.firstName = "amol"
amol.lastName = "rao"
amol.age = 45 
amol.roll = 56
amol.displayName()

class personB{
    constructor(fn,ln,ag,roll){
        this.firstName = fn
        this.lastName = ln
        this.ag = ag
        this.roll = roll
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let amolB = new personB("amolB","raoB",45,66)
amolB.displayName()

class personC{
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
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
let amolC = new personC()
console.log(amolC)
amolC.setFirstName("suvarna")
amolC.setLastName("chaskar")
amolC.setAge(34)
amolC.setRollNo(32)
amolC.displayName()

//set and get get keyword

// let info = {
 // firstname:'suvarna',
 // lastname: "chaskar" 
//}

//console.log(info.firstname)
//console.log(infolastname)
//info.city = "pune"
//console.log(info)

class personD{

    set firstName(fn){

        this.first_name = fn
    }
    get firstName(){
        return this.first_name
    }
    set lastName(ln){
        this.last_name = ln
    }
    get lastName(){
        return this.last_name
    }
    set rollNo(rn){
        this.roll_no = rn
    }
    get roll_No(){
        return this.roll_no
    }
    set Age(ag){
        this.age = ag
    }
    get Age(){
        return this.age
    }

    displayName(){
        console.log(this.first_name + this.last_name)
    }


}

let abc = new personD()
console.log(abc)

abc.firstName = "suvarna"
abc.lastName = "chaskar"
abc.Age = 10
abc.rollNo = 45

console.log(abc.firstName)
console.log(abc.lastName)
console.log(abc.Age)
console.log(abc.rollNo)


console.log(abc.firstName)
console.log(abc)