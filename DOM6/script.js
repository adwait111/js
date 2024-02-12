//<h1 id = "one" class ="two" name = "nm">Heading</h1>
// css selection
// byid
let byId = document.querySelector('#one')
console.log(byId)
//byclass
let byclass = document.querySelector('.two')
console.log(byclass)
//bytagName
let bytagName = document.querySelector('h1')
console.log(bytagName)
//byAttribute
//tagname[attribute ="value"]
let byAttribute = document.querySelector("h1[name='nm']")
console.log(byAttribute)

// html element -----------> object ------- properties and method


byAttribute.addEventListener('click',function(){
    byAttribute.textContent = "suvarna"
    byAttribute.style.color = "red"
})