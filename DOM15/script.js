// program 1

// id

let htmlOne = document.querySelector('#one')
let getElementById = document.getElementById('one')

// console.log(htmlOne)
// console.log(getElementById)

// program 2
// class

let byclassname = document.querySelector('.two')
console.log(byclassname)

let allelementNodeList = document.querySelectorAll('.fruits')
console.log(allelementNodeList)

// selecting the element
let addButton = document.querySelector('button')
addButton.addEventListener('click',function(){
    for(let i = 0 ; i < allelementNodeList.length ; i++){
        console.log(allelementNodeList[i])
        allelementNodeList[i].Style.color = "green"
    }
})

let allelementHtmlCollection = document.getElementsByClassName('fruits')
console.log(allelementHtmlCollection)

// program 3 
// tagName 
//    <h1 id = "one">Hello</h1>
let bytagName = document.querySelector('h1')
let allElementWithTagLi =  document.querySelectorAll('li')
console.log(allElementWithTagLi)

let allElementWithTagLiHtmlCollection = document.getElementsByTagName('li')
console.log(allElementWithTagLiHtmlCollection)

// program 4

let byclassName = document.querySelector('[name="fr"]')
console.log(byclassName)

let byNameNodeList = document.querySelectorAll('[name="fr"]')
console.log(byNameNodeList)

let byNameNodeList2 = document.getElementsByName('fr')
console.log(byNameNodeList2)

//