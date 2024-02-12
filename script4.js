//conditional statments
// numT > 0  && numT <= 5  -------> 5% discount
// numT > 5  && numT <= 10 -------> 10% discount
// numT > 10               -------> 20% discount

// if(condition){
//   //statments
//}

let numT = 17
if(numT > 0 && numT <= 5){
    console.log('5% discount')
}
if(numT > 5 && numT <= 10){
    console.log('10% discount')
}
if(numT > 10){
    console.log('20% discount')
}
// program 2
let numT2 = -17
if(numT2 > 0 && numT2 <= 5){
    console.log('5% discount')
}
else if(numT2 > 5 && numT2 <= 10){
    console.log('10% discount')
}
else if(numT2 > 10){
    console.log('20% discount')
}
else {
    console.log('incorrect input')
}

// program 3
let marks = 55
//if(marks >= 90){
//   console.log('grade A')
//}
//if(marks >= 75){
//   console.log('grade B')
//}
//if(marks >= 65){
//   console.log('grade C')
//}
if(marks >= 90){
    console.log("grade A")
}
else if(marks >= 75){
    console.log("grade B")
}
else if(marks >= 65){
    console.log("grade C")
}
else {
    console.log("please try again..")
}

//program 5 
let q = 10
let r = 50

if(q > r ){
    console.log("q is grater")
}
else {
    console.log("r is grater")
}

// ternary operator
q > r ? console.log('q is greater'):console.log('r is greater')
