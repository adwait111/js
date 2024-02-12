let buttonOne = document.querySelector('#one')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')



buttonOne.addEventListener('click',function(){
    let txt = inputText.value
    let newElement = document.createElement('li') // <li></li>
    newElement.textContent = txt // <li>Chikoo</li>
    createButtons(newElement)
    ulList.appendChild(newElement)
    inputText.value = ""

})

function createButtons(li){
    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let u = document.createElement('button')
    u.textContent = "Down"
    r.classList.add('down')
    li.appendChild(u)

    let d = document.createElement('button')
    d.textContent = "Up"
    d.classList.add('up')
    li.appendChild(d)



}
// remove , up , down

ulList.addEventListener('click',function(event){
    // console.log(event.target)
    // console.log(event.target.tagName)
    // console.log(event.target.className)

    if (event.target.tagName == "BUTTON"){
        if(event.target.className == "remove"){
            let li = event.parentElement
            let ulList = li.parentElement
            ulList.removeChild(li)
        }

        else if (event.target.className == "UP"){
            let li = event.target.parentElement
            let ul = li.parentElement
            let preLi = li.previousElementSibling
            if (preLi) {
                ul.insertBefore(li, preLi)
            }
            else if (event.target.className == "down") {
                let li = event.target.parentElement
                let ul = li.parentElement
                let nextLi = li.nextElementSibling
                if (nextLi) {
                    ul.insertBefore(nextLi, li)
                }
            }
        }
    }
})
