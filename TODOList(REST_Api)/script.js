document.addEventListener('DOMContentLoaded',reload)

let form=document.querySelector('form')

form.addEventListener('submit',addTodoList)

let userList=document.getElementsByTagName('ul')[0]

function addTodoList(event){
    event.preventDefault()
    let todoDetails={
        task:event.target.name.value,
        description:event.target.description.value
    }
    if(todoDetails){
        submitToDo(todoDetails)
    }
    form.reset()
}

async function submitToDo(todoDetails) {
    try{
        let res=await axios.post(`https://crudcrud.com/api/fccdb0e23e68434aaea1cb3e4a46ec6a/todoDetails`,todoDetails)
        console.log(res.data)
        let details=res.data
        let id=details._id
        displayTodo(details,id)

    }
    catch(err){
        console.log("error!",err)
    }
}

async function displayTodo(details,id) {
    try{
        let list=document.createElement('li')
        list.className='list d-flex  border-0 bg-secondary p-2 m-2 rounded list-unstyled text-white'
        list.innerHTML=`To-Do: ${details.task}, Description: ${details.description}`

        let editBtn=document.createElement('button')
        editBtn.className='edt-btn bg-transparent text-black rounded border-0 ms-auto p-1'
        editBtn.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'

        list.appendChild(editBtn)

        let delBtn=document.createElement('button')
        delBtn.className='del-btn bg-transparent rounded ms-2 text-black border-0 p-1'
        delBtn.innerHTML='<i class="fa-solid fa-trash"></i>'

        list.appendChild(delBtn)

        editBtn.addEventListener('click',function(e){
            e.preventDefault()
            editfunction(details,list,id)
        })

        delBtn.addEventListener('click',function(e){
            e.preventDefault()
            deleteFunction(list,id)
        })

        userList.appendChild(list)
    }
    catch(err){
        console.log('Error!',err)
    }
}

async function editfunction(details,list,id) {
    try{
        document.getElementsByClassName('name')[0].value=details.task;
        document.getElementsByClassName('description')[0].value=details.description;

        form.removeEventListener('submit',addTodoList)

        async function editTodoList(e) {
            try{
                e.preventDefault()

                details.task=document.getElementsByClassName('name')[0].value;
                details.description=document.getElementsByClassName('description')[0].value;

                axios.put(`https://crudcrud.com/api/fccdb0e23e68434aaea1cb3e4a46ec6a/todoDetails/${id}`,details)

                list.innerHTML=`To-Do: ${details.task}, Description: ${details.description}`

                let editBtn=document.createElement('button')
                editBtn.className='edt-btn bg-transparent text-black rounded border-0 ms-auto p-1'
                editBtn.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'
                list.appendChild(editBtn)

                let delBtn=document.createElement('button')
                delBtn.className='del-btn bg-transparent rounded ms-2 text-black border-0 p-1'
                delBtn.innerHTML='<i class="fa-solid fa-trash"></i>'
                list.appendChild(delBtn)

                editBtn.addEventListener('click',function(e){
                    e.preventDefault()
                    editfunction(details,list,id)
                })

                delBtn.addEventListener('click',function(e){
                    e.preventDefault()
                    deleteFunction(list,id)
                })
            }
            catch(err){
                console.log("error!",err)
            }
            form.removeEventListener('submit',editTodoList)
            form.addEventListener('submit',addTodoList)
            form.reset()
        }
        form.addEventListener('submit',editTodoList)
    }
    catch(err){
        console.log("Error!",err)
    }
}

async function deleteFunction(list,id){
    try{
        await axios.delete(`https://crudcrud.com/api/fccdb0e23e68434aaea1cb3e4a46ec6a/todoDetails/${id}`)
        list.remove()
    }
    catch(err){
        console.log('error!',err)
    }
}

async function reload(event) {
    try{
        event.preventDefault()
        let res=await axios.get(`https://crudcrud.com/api/fccdb0e23e68434aaea1cb3e4a46ec6a/todoDetails`)
        let data=res.data
        data.forEach(element => {
            displayTodo(element,element._id)
        });
    }
    catch(err){
        console.log('Error!',err)
    }
}