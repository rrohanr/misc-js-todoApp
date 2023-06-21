const addBtn = document.getElementById('add')
const selectBtn = document.getElementById('categories')
let itemsLen = 0

addBtn.addEventListener('click', addItem)
selectBtn.addEventListener('change', filteredList)

function addItem(e) {
    e.preventDefault()

    itemsLen++
    const input = document.getElementById('tasks').value
    const li = document.createElement('li')
    li.className = 'item-' + itemsLen

    const span = document.createElement('span')
    span.className = 'item-name item-' + itemsLen
    span.append(input)

    const checkbtn = document.createElement('button')
    checkbtn.className = 'check btn btn-' + itemsLen
    const checkicon = document.createElement('i')
    checkicon.className = "fa-sharp fa-solid fa-check"
    checkbtn.append(checkicon)

    const deletebtn = document.createElement('button')
    deletebtn.className = 'delete btn btn-' + itemsLen
    const deleteicon = document.createElement('i')
    deleteicon.className = "fa-solid fa-trash"
    deletebtn.append(deleteicon)

    li.append(span, checkbtn, deletebtn)

    const todoList = document.querySelector('.todo-list')
    todoList.append(li)

    deletebtn.addEventListener("click", e => {
        li.remove()
        --itemsLen
    })
    checkbtn.addEventListener("click", e => {
        const strike = document.createElement("s")
        strike.append(input)
        console.log(span.children, span.childNodes)
        span.removeChild(span.childNodes[0])
        span.append(strike)
        li.className = li.className + ' completed'
    })
}

function filteredList(e) {
    e.preventDefault()
    console.log(e)
    const value = e.target.value
    const list = document.querySelector(".todo-list")
    const childNodes = Array.from(list.children)
    childNodes.forEach((element, i) => {
        console.log('element', element)
        const clsName = 'item-' + (++i) + ' completed'
        if (value === 'completed') {
            if (element.className === clsName) {
                console.log('completed', element)
            } else element.style.display = "none"
        }
        if (value === 'uncompleted') {
            if (element.className === clsName) {
                element.style.display = 'none'
            } else element.removeAttribute("style")
        }
        if (value === 'all') {
            element.removeAttribute("style")
        }
    });

}



