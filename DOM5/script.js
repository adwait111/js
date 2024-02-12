//selection of element

let headOne = document.querySelector('h1')
let buttonchange = document.querySelector('button')

//based on user action , changing the styles

buttonchange.addEventListener('click',function(){
    headOne.style.color = "red"
    headOne.textContent = "red"
})