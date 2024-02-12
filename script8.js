//for(intialization ; conditionCheak ; increment/decrement ){
    // statments
//}

// while loop 
// initialization 
// while (condition){
    //statments
    //increment / decrement
//}
 

// print 1 to 3
let t1 = 1
while(t1 <= 3){
    console.log(t1)
    t1++
}

// print 1 to 5 
let t2 = 1
while(t2 <= 5){
    console.log(t2)
    t2++
}

// print "hello" 3 times

let t3 = 1
while(t3 <= 3){
    console.log("hello")
    t3++
}

// print 5 to 1
let t4 = 5
while(t4 >= 1){
    console.log(t4)
    t4--
}

//  table of 2
let t5 = 2
while(t5 <= 20){
    console.log(t5)
    t5=t5 + 2
}

// table of 5 reverse 
let t6 = 50
while(t6 >= 5){
    console.log(t6)
    t6 = t6 - 5
}

// break with while loop
let t7 = 1
while(t7 <= 5){
    console.log(t7)
    if(t7 == 3){
    break
    }
    t7++
}

let t8 = 1
while(t8 <= 5){
    if(t8 == 3){
        break
    }
    console.log(t8)
    t8++
}

let t9 = 10
while(t9 >= 5){
    console.log(t9)
    if(t9 == 6){
        break
    }
    t9--
}

//continue with while loop
let t10 = 1
while(t10 <= 5){
    if(t10 == 2){
        t10++
        continue
    }
    console.log(t10)
    t10++
}