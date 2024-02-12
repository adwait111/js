//  program  1
let x = 10
console.log(x)

//              0  1  2  3  4
let numbers = [11,22,33,44,55]
console.log(numbers)

console.log(numbers[0]) ///11
console.log(numbers[1]) // 22
console.log(numbers[2]) // 33
console.log(numbers[3]) // 44
console.log(numbers[4])// 5

// object ------- property and method
console.log(numbers.length)
console.log(numbers.length - 1)
// length - 1  is always the last index

// program 2
//              0         1       2     3       4
let names = ["chinmay","sarika","ram","sham","satish"]
console.log(names.length)

for(let i = 0 ; i < names.length ; i++){
   // console.log(i)
    console.log(names[i])
}

//program 3
//
let fruits = ["mango","banana","grapes","apple"]

for(let i = fruits.length-1 ; i >= 0 ; i--)(
    console.log(fruits[i])
)

