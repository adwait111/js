

let headOne = document.querySelector('h1')
let buttonOne = document.querySelector('button')

buttonOne.addEventListener('click',function(){
    headOne.textContent = headOne.textContent.toUpperCase()
    headOne.style.color = "red"

})