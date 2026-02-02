let form=document.getElementsByTagName('form')[0]

form.addEventListener('submit',userDetails)

function userDetails(event){
    event.preventDefault()
    let id=Date.now()
    let data={
        username:event.target.elements.username.value,
        email:event.target.elements.email.value,
        phone:event.target.elements.phone.value
    }
    if(data){
        localStorage.setItem(id,JSON.stringify(data))
        displayUsers(data)
    }
    form.reset()
}

let ul=document.getElementsByTagName('ul')[0]

function displayUsers(data){
    let list=document.createElement('li')
    list.innerHTML=`Username : ${data.username}, email: ${data.email}, phone: ${data.phone}`
    ul.appendChild(list)
}