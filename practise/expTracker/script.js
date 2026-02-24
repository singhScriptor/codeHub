document.addEventListener('DOMContentLoaded',reload)


let form=document.querySelector('form')

let userlist=document.querySelector('ul')

form.addEventListener('submit',addExense)

function addExense(event){
    event.preventDefault()
    let details={
        name:event.target.name.value,
        price:event.target.price.value,
        category:event.target.category.value
    }
    if(details){
        let id=Date.now()
        localStorage.setItem(id,JSON.stringify(details))
        displayData(details,id)
    }
    else{
        console.log('kindly fill the details')
    }
    form.reset()
}
function displayData(details,id){
    let list=document.createElement('li')
    list.className='list m-2 shadow-lg p-2 rounded list-unstyled d-flex flex-wrap'
    list.innerHTML=`${details.name}, ${details.price}, ${details.category}`

    let editBtn=document.createElement('button')
    editBtn.className='edt-btn bg-warning p-2 text-white rounded border-0 ms-auto '
    editBtn.textContent='edit'
    list.appendChild(editBtn)

    editBtn.addEventListener('click',()=>{
        editFunction(details,list,id)
    })

    let delBtn=document.createElement('button')
    delBtn.className='del-btn bg-danger p-2 text-white rounded border-0 m-1 '
    delBtn.textContent='delete'
    list.appendChild(delBtn)

    delBtn.addEventListener('click',()=>{
        deleteFunction(list,id)
    })
    userlist.appendChild(list)
}

function editFunction(details,list,id){
    document.querySelector('[name="name"]').value=details.name
    document.querySelector('[name="price"]').value=details.price
    document.querySelector('[name="category"]').value=details.category

    form.removeEventListener('submit',addExense)

    function updateExpense(e){
        e.preventDefault()

        details.name=e.target.name.value;
        details.price=e.target.price.value;
        details.category=e.target.category.value;

        localStorage.setItem(id,JSON.stringify(details))

        list.innerHTML=`${details.name}, ${details.price}, ${details.category}`

        let editBtn=document.createElement('button')
        editBtn.className='edt-btn bg-warning p-2 text-white rounded border-0 ms-auto '
        editBtn.textContent='edit'
        list.appendChild(editBtn)

        editBtn.addEventListener('click',()=>{
            editFunction(details,list,id)
        })
        let delBtn=document.createElement('button')
        delBtn.className='del-btn bg-danger p-2 text-white rounded border-0 m-1 '
        delBtn.textContent='delete'
        list.appendChild(delBtn)

        delBtn.addEventListener('click',()=>{
            deleteFunction(list,id)
        })

        form.removeEventListener('submit',updateExpense)
        form.addEventListener('submit',addExense)
        form.reset()


    }
    form.addEventListener('submit',updateExpense)
}

function deleteFunction(list,id){
    localStorage.removeItem(id)
    list.remove()
}

function reload(event){
    event.preventDefault()
    for(let i=0;i<localStorage.length;i++){
        let key=localStorage.key(i)
        let details=JSON.parse(localStorage.getItem(key))
        if(details){
            displayData(details,key)
        }
    }
}