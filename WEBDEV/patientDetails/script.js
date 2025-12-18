document.addEventListener('DOMContentLoaded',reload)

let form=document.getElementsByClassName('form')[0]

let userList=document.getElementsByClassName('userList')[0]

form.addEventListener('submit',formDetails)

async function formDetails(e) {
    e.preventDefault()
    try{
        let details={
            name:document.getElementsByClassName('name')[0].value,
            email:document.getElementsByClassName('email')[0].value,
            contact:document.getElementsByClassName('phone')[0].value,
            gender:document.getElementsByClassName('gender')[0].value
        }
        if(details){
            let userId=Date.now()
            details.userId=userId
            localStorage.setItem(userId,JSON.stringify(details))

            displayDetails(details,userId)
        }
    }
    catch(err){
        console.log('Something wrong while filling the form',err)
    }
    form.reset()
}
async function displayDetails(details,userId) {
    try{
        let list=document.createElement('li')
        list.className='list shadow-lg p-2 m-3 rounded list-unstyled'
        list.innerHTML=`<strong>Name :</strong> ${details.name}, 
                        <strong>Email :</strong> ${details.email}, 
                        <strong>Phone :</strong> ${details.contact}, 
                        <strong>Gender :</strong> ${details.gender}`

        let editBtn=document.createElement('button')
        editBtn.className="edit bg-warning p-1 m-1 rounded border-0 text-white"
        editBtn.textContent='Edit'
        list.appendChild(editBtn)  
        
        editBtn.addEventListener('click',function(){
            editDetails(details,list)
        })

        let delBtn=document.createElement('button')
        delBtn.className='delete bg-danger text-white p-1 m-2 rounded border-0'
        delBtn.textContent='Delete'

        list.appendChild(delBtn)

        delBtn.addEventListener('click',function(){
            deleteDetails(list,userId)
        })

        userList.appendChild(list) 
    }
    catch(err){
        console.log(err)
    }
}
async function editDetails(details,list) {

    try{
        document.getElementsByClassName('name')[0].value=details.name
        document.getElementsByClassName('email')[0].value=details.email
        document.getElementsByClassName('phone')[0].value=details.contact
        document.getElementsByClassName('gender')[0].value=details.gender
    
        form.removeEventListener('submit',formDetails)

        function updateDetails(e){
            e.preventDefault()
            details.name=document.getElementsByClassName('name')[0].value
            details.email=document.getElementsByClassName('email')[0].value
            details.contact=document.getElementsByClassName('phone')[0].value

            localStorage.setItem(details.userId, JSON.stringify(details))

            list.innerHTML=`<strong>Name :</strong> ${details.name}, 
                        <strong>Email :</strong> ${details.email}, 
                        <strong>Phone :</strong> ${details.contact}, 
                        <strong>Gender :</strong> ${details.gender}`


            let editBtn=document.createElement('button')
            editBtn.className="edit bg-warning p-1 m-2 rounded border-0 text-white"
            editBtn.textContent='Edit'
            list.appendChild(editBtn)
            editBtn.addEventListener('click',function(){
                editDetails(details,list)
            })

            let delBtn=document.createElement('button')
            delBtn.className='delete bg-danger text-white p-1 m-2 rounded border-0'
            delBtn.textContent='Delete'
            list.appendChild(delBtn)
            delBtn.addEventListener('click',function(){
                deleteDetails(list,userId)
            })

            form.removeEventListener('submit',updateDetails)
            form.addEventListener('submit',formDetails)
            form.reset()
        }
        form.addEventListener('submit',updateDetails)
    }
    catch(err){
        console.log(err)
    }
}

async function deleteDetails(list,userId) {
    try{
        list.remove()

        localStorage.removeItem(userId)
    }
    catch(err){
        console.log(err)
    }
    
}

async function  reload() {
    try{
        for(let i=0;i<localStorage.length;i++){
            let key=localStorage.key(i)
            let data=JSON.parse(localStorage.getItem(key))
            if(data){
                data.userId=key
                displayDetails(data,key)
            }
        }
    }
    catch(err){
        console.log('Error while reloading',err)
    }
}