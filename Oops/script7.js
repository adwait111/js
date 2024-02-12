// class Calculator{
//     addition(x,y){
//         console.log(x+y)
//     }
//     addition(x,y,z){
//         console.log(x+y+z)
//     }
//     addition(x,y,z,a){
//         console.log(x+y+z+a)
//     }


// addition(x,y,z,a) {
//     if(x != undefined && y != undefined && z != undefined && a != undefined){
//         console.log(x+y+z+a)
//     }
//     else if(x != undefined && y != undefined && z != undefined){
//         console.log(x+y+z)
//     }
// else if(x != undefined && y != undefined ){
//          console.log(x+y)
// }

// }

// let a = new Calculator()
// a.additon(12,4)
// a.additon(12,4,3)
// a.additon(12,4,3,5)

class WorldBank {
    save(){
        console.log("I am save from worldbank")
    }
    loan(){
        console.log("I am loan from worldbank")
    }
}

class SBI extends WorldBank {
    displayBranch(){
        console.log("pune branch")
    }
    save(){
        console.log("I am save from SBI")
    }
    loan(){
        console.log("I am loan from SBI")
    }
}

class PNB extends WorldBank{
    displayBranch (){
        console.log("nagpur branch")
    }
    save(){
        console.log("I am save from PNB")
    }
    loan(){
        console.log("I am loan from PNB")
    }
}

let sbi = new SBI()
sbi.loan()
sbi.save()
sbi.displayBranch()

let pnb = new PNB()
pnb.loan()
pnb.save()
pnb.displayBranch()