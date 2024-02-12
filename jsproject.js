//               0         1      2      3        4
let names = ["chinmay","sarika","ram","poorva","satish"]
names2 = names
names2[0]="ninad"
console.log(names)
console.log(names2)

// program 1
// spread operator 
let number = [11,22,33,44,55,66,77]
function addThree(a,b,c){
    console.log(a+b+c)
}
addThree(...number)

// program 2
let cities = ["pune","mumbai","kolkata"]
let cities2 = [...cities]
cities2[0]= "wardha"
console.log(cities2)
console.log(cities)

// program 3 
let a = [11,22,33]
let b = [44,55,66]
let c = a.concat(b)
console.log(c)
console.log(a)
console.log(b)
let d = [...a,5,...b]
console.log(d)

// program 4
function addAll(...eles){
    console.log(eles)
    return eles.reduce(function(acc,el,index,arr){
        return acc+el
    },0)
}
let q1 = addAll(11,22,33,44,55,66,77,88,8,9,0,5,7)
console.log(q1)

//11,22,33,44,55,66,77,88,8,9,0,5,7 ==> rest ==> [11,22,33,44,55,66,77,88,8,9,0,5,7 ]

//program 6 
let numberD = [22,33,44,55,66]
let [a1,b1,c1,...d1] = numberD
console.log(d1)
console.log(a1)
console.log(b1)
console.log(c1)

// program 7 
let obj1a = {firstName:"suvarna",lastName:"chaskar",middleName:"ashok"}
let {firstName,...restInfo} = obj1a
console.log(obj1a)


