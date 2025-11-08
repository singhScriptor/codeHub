let form=document.querySelector('form')
let submit=document.getElementById('submit')
submit.addEventListener('click',function(e){
    e.preventDefault()
    let selected=form.querySelector('input[type="radio"]:checked')
    if(selected){
        console.log(selected.value)
    }
    else{
        console.log("no input")
    }


})