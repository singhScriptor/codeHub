document.addEventListener('DOMContentLoaded',reload)

let form=document.querySelector('form')

form.addEventListener('submit',addExpenses)

let userList=document.querySelector('ul')

function addExpenses(event){
    event.preventDefault()
    let details={
        name:event.target.name.value,
        price:event.target.price.value,
        category:event.target.category.value,
        description:event.target.description.value
    }
    if(details){
        postDetails(details)
    }
    else{
        console.log("kindly fill the details")
    }
    form.reset()
}
async function postDetails(details) {
    try{
        let res= await axios.post(`https://crudcrud.com/api/d43b14d5e625409fa58776a979ad4c4f/addExpenses`,details)
        console.log(res.data)
        let expDetails=res.data
        let id=res.data._id
        displayDetails(expDetails,id)
    }
    catch(err){
        console.log("Error!",err)
    }
}
async function displayDetails(expDetails,id){
    try{
        let list=document.createElement('li')
        list.className='list text-white bg-black border border-2 border-secondary p-1 rounded list-unstyled m-1 d-flex'
        list.innerHTML=`Expense-Name:${expDetails.name}, Price:${expDetails.price},<br>
        Category:${expDetails.category}, Description:${expDetails.description}`

        let editBtn=document.createElement('button')
        editBtn.className='edit-btn bg-warning  p-2 text-white border-0  rounded ms-auto'
        editBtn.textContent='edit'

        list.appendChild(editBtn)

        let delBtn=document.createElement('button')
        delBtn.className='del-btn bg-danger p-2 text-white border-0 rounded ms-2'
        delBtn.textContent='X'

        list.appendChild(delBtn)

        editBtn.addEventListener('click',function(){
            editExpense(expDetails,id,list)
        })

        delBtn.addEventListener('click',function(){
            deleteExpense(list,id)
        })

        userList.appendChild(list)
    }
    catch(err){
        console.log("Error!",err)
    }
}
async function editExpense(expDetails,id,list) {
    try{
        document.querySelector("[name='name']").value=expDetails.name
        document.querySelector("[name='price']").value=expDetails.price
        document.querySelector("[name='category']").value=expDetails.category
        document.querySelector("[name='description']").value=expDetails.description

        form.removeEventListener('submit',addExpenses)

        async function updateExpense(event){
            try{
                event.preventDefault()

                expDetails.name=event.target.name.value;
                expDetails.price=event.target.price.value;
                expDetails.category=event.target.category.value;
                expDetails.description=event.target.description.value
                await axios.put(`https://crudcrud.com/api/d43b14d5e625409fa58776a979ad4c4f/addExpenses/${id}`,expDetails)

                list.innerHTML=`Expense-Name:${expDetails.name}, Price:${expDetails.price},<br>
                Category:${expDetails.category}, Description:${expDetails.description}`

                let editBtn=document.createElement('button')
                editBtn.className='edit-btn bg-warning  p-2 text-white border-0  rounded ms-auto'
                editBtn.textContent='edit'

                list.appendChild(editBtn)

                let delBtn=document.createElement('button')
                delBtn.className='del-btn bg-danger p-2 text-white border-0 rounded ms-2'
                delBtn.textContent='X'
                
                list.appendChild(delBtn)

                editBtn.addEventListener('click',function(){
                    editExpense(expDetails,id,list)
                })
                
                delBtn.addEventListener('click',function(){
                    deleteExpense(list,id)
                })

            }
            catch(err){
                console.log(err)
            }
            form.removeEventListener('submit',updateExpense)
            form.addEventListener('submit',addExpenses)
            form.reset()
        }
        form.addEventListener('submit',updateExpense)
    }
    catch(err){
        console.log("Error!",err)
    }
}

async function deleteExpense(list,id) {
    try{
        await axios.delete(`https://crudcrud.com/api/d43b14d5e625409fa58776a979ad4c4f/addExpenses/${id}`)
        list.remove()
    }
    catch(err){
        console.log("Error!",err)
    }
}


async function reload(event) {
    try{
        event.preventDefault()
        let res=await axios.get('https://crudcrud.com/api/d43b14d5e625409fa58776a979ad4c4f/addExpenses')
        let data=res.data
        data.forEach(element => {
            displayDetails(element,element._id)
        });
    }
    catch(err){
        console.log("Error!",err)
    }
}
