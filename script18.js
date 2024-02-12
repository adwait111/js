let students = [
    {
        firstName:"suvarna",
        lastName:"chaskar",
        age:27,
        rollNo:14,
        skills:["html","css","javascript"],
        city:"pune"
    },
    {
        firstName:"monika",
        lastName:"gavhane",
        age:25,
        rollNo:37,
        skills:["html","python","javascript","css"],
        city:"jaipur"
    },
    {
        firstName:"amol",
        lastName:"rahane",
        age:23,
        rollNo:31,
        skills:["css","django","python"],
        city:"ujjain"
    },
    {
        firstName:"sarika",
        lastName:"pansare",
        age:33,
        rollNo:37,
        skills:["html","css","javascript","cypress"],
        city:"pune"
    }
]

//program 1
//print firstname for all user
students.forEach(function(el){
    console.log(el.firstName)
})

//program 2
//print name:no of skills
students.forEach(function(el){
    console.log(el.firstName+":"+el.skills.length)
})

// program 3
// print user with python
students.forEach(function(el){
    if(el.skills.includes("python")){
        console.log(el.firstName)
    }
})

// program 4
//print user with python and django
students.forEach(function(el){
    if(el.skills.includes("python") && el.skills.includes("django")){
        console.log(el.firstName)
    }
})

//program 5
//print user with "o"as string in first name
students.forEach(function(el){
    if(el.firstName.includes("o")){
        console.log(el.firstName)
    }
})

//program 6
// prompy engineer skills added to all users
students.forEach(function(el){
    el.skills.push("prompt engineer")
})
console.log(students)

// program 7
//avrage age of all users
let q1 = students.reduce(function(acc,el){
    return acc + el.age
},0)
console.log(q1/students.length)

// program 8
// print user fullname with roll above 30
let q4 = students.filter(function(el){
    return el.rollNo > 30
})
console.log(q4)

q4.forEach(function(el){
    console.log(el.firstName)
})
