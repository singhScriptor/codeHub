let form=document.getElementById('form')
let submit=document.getElementById('submit')
let userList=document.getElementById('list')

form.addEventListener('submit',handleSubmit)

function handleSubmit(e){
    e.preventDefault()

    let details={
        name:document.getElementById('name').value,
        age:document.getElementById('age').value,
        sex:document.getElementById('sex').value,
        address:document.getElementById('address').value
    }
    if(details.name && details.age && details.sex  && details.address){
        //alert("all fields are reuqired")
        console.log(details)
        displayDetails(details)
    }
    //console.log(details)
    //alert(JSON.stringify(details))
    
}
function displayDetails(details){
    let list=document.createElement('li')
    const item=[
        `Name : ${details.name}`,
        `Age : ${details.age}`,
        `Sex : ${details.sex}`,
        `Address : ${details.address}`
    ]
    list.textContent=item.join('  ')
    userList.appendChild(list)
}




