// Oppgave 1
const textToRemove = document.getElementById("remove")
const removeBtn = document.getElementById("remove-btn")

removeBtn.addEventListener('click', () => {
    textToRemove.remove()
})

// Oppgave 2
const textToChange = document.getElementById("change")
const changeBtn = document.getElementById("change-btn")

changeBtn.addEventListener('click', () => {
    textToChange.textContent = "Tekst er nå forandret!"
})

// Oppgave 3
const inputField = document.getElementById('input')
const inputText = document.getElementById('input-text')
// Hentet typen keypress fra medium.com da jeg ønsket at den skulle
// oppdatere automatisk. Kilde:
// https://dbchung3.medium.com/add-event-listener-dom-event-types-6c10a844c9d8
inputField.addEventListener('keypress', () => {
    inputText.textContent = inputField.value
})

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
const ul = document.getElementById('ul')
const writeListBtn = document.getElementById('write-list')
let index = 0

writeListBtn.addEventListener('click', () => {
    if (index < myList.length) {
        let liText = myList[index]
        let li = document.createElement('li')
        li.innerHTML = liText
        ul.appendChild(li)
    } else {
        writeListBtn.textContent = "Ingen flere elementer."
    }
    index += 1
})

// Oppgave 5
const text = document.getElementById('text')
const createBtn = document.getElementById('create')
const select = document.getElementById('select')
const placeholder = document.getElementById('placeholder')

createBtn.addEventListener('click', () => {
    let selectValue = select.value // henter type fra select
    let textValue = text.value // henter text fra input
    
    // Create the element to add
    let elementToAdd = document.createElement(selectValue)
    elementToAdd.textContent = textValue
    placeholder.appendChild(elementToAdd)
})

// Oppgave 6
const list = document.getElementById('list')
const removeLi = document.getElementById('remove-li')
// Kilde: https://www.w3schools.com/jsref/prop_element_childelementcount.asp
let lastChild = (list.children.length - 1)
// Prøvde å bruke 
// list.removeChild(list.lastChild)
// men dette fungerte, men man måtte klikke 2 ganger pr. child
removeLi.addEventListener('click', () => {
    if (lastChild >= 0) {
        list.removeChild(list.children[lastChild])
        lastChild -= 1
    }
})

// Oppgave 7
const orderBtn = document.getElementById("order");
const nameInput = document.getElementById("name")

nameInput.addEventListener('keyup', () => {
    let inputLength = nameInput.value.length    
    if ( inputLength > 4 ) {
        orderBtn.disabled = true
        orderBtn.style.borderColor = "red"
    }
    else{
        orderBtn.disabled = false
        orderBtn.style.borderColor = ""
    }
})

// Oppgave 8
const childrenUl = document.querySelector('.children')
const colorBtn = document.getElementById('color')
let amountOfChildren = (childrenUl.children.length)

// Hadde garantert vært bedre med :nth-child pseudoklasse her
// Men dette fungerer jo.
colorBtn.addEventListener('click', () => {
    for (let i = 0; i < amountOfChildren; i++){
        if (i % 2 === 0){
            childrenUl.children[i].style = "border: 3px solid green;"
        }
        else{
            childrenUl.children[i].style = "border: 3px solid pink;"
        }
    }
})

