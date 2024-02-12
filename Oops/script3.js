class PersonE {
    set firstName(fn) {
        this.first_name = fn
    }
    get firstName() {
        return this.first_name
    }
    set lastName(ln) {
        this.last_name = ln
    }
    get lastName(){
        return this.last_name
    }
    
}
let suvarna = new PersonE()
console.log(suvarna)
suvarna.firstName = "suvarna"
suvarna.lastName = "chaskar"
console.log(suvarna)

console.log(suvarna.firstName)
console.log(suvarna.lastName)