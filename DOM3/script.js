//    <h1 id = "one" class = "two" name = "nm">Chinmay</h1>

//Css selector


//byid
let byid = document.querySelector('#one')
console.log(byid)
//byclass
let byclass = document.querySelector('.two')
console.log(byclass)
//by tagname
let bytagName = document.querySelector('h1')
console.log(bytagName)
//by Attribute
//tagName[Attribute="value"]
let byAttribute = document.querySelector('h1[name="nm"]')
console.log(byAttribute)