let form=document.getElementsByTagName('form')[0]

form.addEventListener('submit',userDetails)

function userDetails(e){
    e.preventDefault()
    let username=e.target.elements.username.value;
    let email=e.target.elements.email.value;
    let phone=e.target.elements.phone.value

    localStorage.setItem('username',username)
    localStorage.setItem('email',email)
    localStorage.setItem('phone',phone)

    console.log('saved :',username,email,phone)


}