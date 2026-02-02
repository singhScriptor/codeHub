let form=document.querySelector('form')

let userList=document.querySelector('ul')

let list=document.querySelectorAll('li')

for(let i=0;i<list.length;i++){

    //add edit button
    let editBtn=document.createElement('button')
    editBtn.textContent='edit'
    editBtn.className='edtBtn'
    editBtn.style.backgroundColor='yellow'
    editBtn.style.textAlign='center'
    editBtn.style.padding='10px'
    editBtn.style.margin='5px'
    editBtn.style.color='black'
    editBtn.style.marginLeft='auto'
    editBtn.style.borderRadius='5px'
    editBtn.style.border='none'

    list[i].appendChild(editBtn)

    //delete Button
    let delBtn=document.createElement('button')
    delBtn.textContent='X'
    delBtn.className='delBtn'
    delBtn.style.backgroundColor='red'
    delBtn.style.textAlign='center'
    delBtn.style.border='none'
    delBtn.style.borderRadius='5px'
    delBtn.style.padding='10px'
    delBtn.style.color='white'
    //delBtn.style.padding='5px'
    list[i].appendChild(delBtn)
    list[i].style.display='flex'
    list[i].style.alignItems='center'

    //attach delete function here 
    delBtn.addEventListener('click',function(e){
        e.preventDefault()
        deleteFunction(list[i])
    })

}

form.addEventListener('submit',addfruit)

function addfruit(e){
    e.preventDefault()
    let fruit=e.target.elements.fruit.value

    console.log(fruit)
    displayFruit(fruit)

}
function displayFruit(fruit){
    let li=document.createElement('li')
    li.textContent=`${fruit}`
    li.style.alignItems='center'
    li.style.display='flex'
    //li.style.padding='10px'
    userList.appendChild(li)

    let editBtn=document.createElement('button')
    editBtn.textContent='edit'
    editBtn.className='edtBtn'
    editBtn.style.borderRadius='5px'
    editBtn.style.border='none'
    editBtn.style.backgroundColor='yellow'
    editBtn.style.padding='10px'
    editBtn.style.margin='5px'
    editBtn.style.marginLeft='auto'
    
    li.appendChild(editBtn)

    let delBtn=document.createElement('button')
    delBtn.textContent='X'
    delBtn.className='delBtn'
    delBtn.style.borderRadius='5px'
    delBtn.style.border='none'
    delBtn.style.backgroundColor='red'
    delBtn.style.padding='10px'
    delBtn.style.color='white'
    li.appendChild(delBtn)

    delBtn.addEventListener('click',function(){
        deleteFunction(li)
    })

}
function deleteFunction(li){
    li.remove()

}

