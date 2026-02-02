let form=document.querySelector('form')

form.addEventListener('submit',showDetails)

function showDetails(e){
    e.preventDefault()
    let booking={
        name:e.target.elements.name.value,
        email:e.target.elements.email.value,
        phone:e.target.elements.phone.value,
        date:e.target.elements.date.value,
        time:e.target.elements.time.value
    }
    form.reset()
    console.log(booking)
    
}