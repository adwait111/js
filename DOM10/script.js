let headOne = document.querySelector('h1')
let inputBox = document.querySelector('input')
let buttonC = document.querySelector('button')

buttonC.addEventListener('click',function(){
   let colorText = inputBox.value
   headOne.style.color = colorText
   inputBox.value = ""
})