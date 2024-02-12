let students = [
    {
        firstName: "Mayuri",
        lastName: "katwe",
        age: 25,
        city: "nashik",
        skills: ["java", "python"],
        marks:50
    },
    {
        firstName: "Vishal",
        lastName: "Raut",
        age: 30,
        city: "Pune",
        skills: ["js", "salesforce", "cypress"],
        marks:100
    },
    {
        firstName: "Sathish",
        lastName: "kumar",
        age: 45,
        city: "nashik",
        skills: ["katlon", "selenium", "react", "python"],
        marks:75
    },
    {
        firstName: "teja",
        lastName: "kulkarni",
        age: 23,
        city: "Sangamner",
        skills: ["katlon"],
        marks:35
    }
]

   

console.log(students.length)

// print first name 
students.forEach(function(el){
    console.log(el.firstName)
})

//print skills length
students.forEach(function(el){
    console.log(el.firstName+ ":"+el.skills.length)
})

//country= india
students.forEach(function(el){
    el.country = "india"
})

console.log(students)

//print skills added playwrite

students.forEach(function(el){
    el.skills.push("playwrite")
})
console.log(students)

//print city nashik print firstname
students.forEach(function(el){
    if(el.city == "nashik"){
        console.log(el.firstName)
    }
})