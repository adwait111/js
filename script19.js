let a = 20
console.log(typeof a)

let b = [12,34,"suvarna"]
console.log(typeof b)
let c = {
    a:20,
    b:30,
    d:"tea"
}
console.log(typeof c)

let student = {
    firstName:"suvarna",
    lastName:"chaskar",
    age:"35",
    skills:["java","python"],
    family:{
        mother:"mangal",
        father:"ashok"
    },
    isMarried:true

}

//object => values .=> datatype

for (let key in student){
    console.log(typeof (key))
}

//map

let a1 = []
let mymap = new Map()
console.log(mymap)

// set()---------- add property 

mymap.set({1:a,b:2},"rollNumber")
mymap.set([1,2,3],"is married")
mymap.set(100,90)
console.log(mymap)

// get ()------- retrive property 

// console.log(mymap.get(123))
// console.log(mymap.get(100))

// // has() ---------- boolean value

// console.log(mymap.has(true))
// console.log(mymap.has(100))

// // delete()
// //console.log(mymap.delete(100))
// //console.log(mymap)

// // clear()

// mymap.clear()
// //console.log(mymap)

// //size --- property

console.log(mymap.size)

// let m2 =new Map([[1,2,3],"marks"],[{a:20,b:30},"suvarna"],[true,"ismarried"])
// console.log(m2)
let m2=new Map([[[1,2,3],"marks"],[{a:20,b:30},"mayuri"],[true,"isStuding"]])
console.log(m2)