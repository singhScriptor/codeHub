document.addEventListener('DOMContentLoaded',reload)

let form=document.getElementsByClassName('form')[0]

let userList=document.getElementsByTagName('ul')[0]

form.addEventListener('submit',addDetails)



function addDetails(e){
    e.preventDefault()
    let expDetails={
        item:e.target.name.value,
        price:e.target.price.value,
        category:e.target.category.value
    }
    if(expDetails){
        let id=Date.now()
        localStorage.setItem(id,JSON.stringify(expDetails))
        showDetails(expDetails,id)
    }
    form.reset()
}
function showDetails(expDetails,id){
    let list=document.createElement('li')
    list.className='exp-list shadow-lg rounded p-2 list-unstyled d-flex m-1'
    list.innerHTML=`${expDetails.item} ${expDetails.price} ${expDetails.category}`

    let editBtn=document.createElement('button')
    editBtn.textContent='edit'
    editBtn.className='edt-btn p-2 ms-auto rounded border-0 bg-warning text-white'
    list.appendChild(editBtn)

    let deleteBtn=document.createElement('button')
    deleteBtn.textContent='delete'
    deleteBtn.className='del-btn m-1 p2 bg-danger text-white border-0 rounded'
    list.appendChild(deleteBtn)

    userList.appendChild(list)

    editBtn.addEventListener('click',()=>{
        editFunction(list,id)
    })

    deleteBtn.addEventListener('click',()=>{
        deleteFunction(list,id)
    })
}

function reload(e){
    e.preventDefault()
    for(let i=0;i<localStorage.length;i++){
        let key=localStorage.key(i)
        let expDetails=JSON.parse(localStorage.getItem(key))
        if(expDetails){
            expDetails.key=key
            showDetails(expDetails)
        }
    }

}

function deleteFunction(list,id){
    list.remove()
    localStorage.removeItem(id)
}
