let form=document.querySelector('form')

form.addEventListener('submit',addDetails)

function addDetails(event){
    event.preventDefault()
    let userData={
        username:event.target.elements.username.value ,
        email:event.target.elements.email.value,
        phone:event.target.elements.phone.value
    }
    if(userData){
        localStorage.setItem('userDetail',JSON.stringify(userData))
        console.log(userData)
    }
    
    form.reset()
}
