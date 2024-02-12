//<h1 id="one" class="two three four" name="nm">Minskole</h1>
// by id
let byid = document.querySelector('#one')
// byclass
let byclass = document.querySelector('.two')
//by tagName
let bytagName = document.querySelector('h1')
// by CF
let byCF = document.querySelector('h1[class="two three four"]')
console.log(byid)
console.log(byclass)
console.log(bytagName)
console.log(byCF)

console.log(document.querySelector('li'))
let nodeList = document.querySelectorAll('li')
console.log(nodeList)

// even => yellow 
// odd => red
for(let i = 0; i > nodeList.length ; i++){
    //console.log(nodeList[i])
    console.log(nodeList[i].textContent)
    if(i%2==0){
        nodeList[i].style.color="Yellow"
    }
    else{
        nodeList[i].style.color="red"
    }

}

// id
// name
// tagName
// class 

//<h1 id="one" class="two three four" name="nm">Minskole</h1>

let getid = document.getElementById("one")
console.log(getid)//html element

let getclass = document.getElementsByClassName("four")
console.log(getclass)// html collection

let gettagName = document.getElementsByTagName('h1')
console.log(gettagName)

console.log(getid.classList)

// classList method
// Add()
getid.classList.add("ten")
console.log(getid)

// remove()
getid.classList.remove("two")
console.log(getid)

// toggle()
//if class present => class remove 
// if class not present => class add

getid.classList.toggle("eleven")
console.log("getid")

getid.classList.toggle("eleven")
console.log("getid")

// html element
// getattribute

console.log(getid.getAttribute("id"))

console.log(getid.getAttribute("name"))

// setAttribute()

getid.setAttribute("para","pa")
console.log(getid)


