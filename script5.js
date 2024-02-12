
// switch case
// program 1 
//switch case without break

let city = "indore"

switch (city){
    case "pune":
        console.log("MH")
    case "indore":
        console.log("MP")
    case "jaipur":
        console.log("RJ")
    case "kanpur":
        console.log("UP")
    default:
    console.log("incoorect city")
}
// program 2
// switch case break
let city2 = "jaipur"
switch (city2){
    case "pune":
        console.log("MH")
        break
    case "indore":
        console.log("MP")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "kanpur":
        console.log("UP")
        break
    default:
        console.log("incorrect cityname")
}

// program 3
 let city3 = "bhopal"
 switch(city3){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "indore":
    case "bhopal":
        console.log("MP")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    case "kanpur":
    case "lucknow":
        console.log("UP")
        break
    default:
        console.log("incorrect cityname")
 }

 //program 4
 // gretest of three number using switch
 let greatest = true
 let a1 = 100
 let b1 = 5000
 let c1 = 50000

 switch(greatest){
    case a1 > b1 && a1 > c1 :
        console.log("a1 is greater")
        break
    case b1 > a1 && b1 > c1:
        console.log("b1 is greater")
        break
    default:
        console.log("c1 is greater")
 }