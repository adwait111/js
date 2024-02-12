//  <h1 id = "one">Red</h1>

let headOne  = document.querySelector('h1')
console.log(headOne)

//console.log(headOne.textContent)
//headOne.textContent = "Green"

headOne.addEventListener('click',function(){
    headOne.textContent = "Green"
    headOne.style.color = "green"
})
