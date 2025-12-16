document.addEventListener('DOMContentLoaded',relaod)

let form=document.getElementById('form')

let userList=document.getElementsByClassName('user-list')[0]


form.addEventListener("submit",addDetils)

async function addDetils(e){
    e.preventDefault()
    let details={
        price:document.getElementsByClassName('price')[0].value,
        category:document.getElementsByClassName('select')[0].value,
        description:document.getElementsByClassName('description')[0].value
    }
    //storing details
    if(details){
        try{
            let response=await axios.post("https://crudcrud.com/api/145c31d0626f4873ad3c3e391e4c52a9/expenseTracker",details)
            let userId=response.data._id

            await displayDetails(userId,details)

        }
        catch(err){
            console.log(err)
        }
    }
    form.reset()

}
//display details
async function displayDetails(userId,details) {
    try{
        let list=document.createElement('li')
        list.id=userId
        list.className='p-2 shadow-lg bg-secondary m-1 rounded'
        list.innerHTML=`<strong>Description :</strong>${details.description}, <strong>Price :</strong>${details.price}, <strong>Category :</strong>${details.category}`

        let 
        userList.appendChild(list)

    }
    catch(err){
        console.log(err)
    }
}
async function relaod() {
    try{
        let res=await axios.get("https://crudcrud.com/api/145c31d0626f4873ad3c3e391e4c52a9/expenseTracker")
        res.data.forEach(item => {
            displayDetails(item._id,item)
        });
    }
    catch(err){
        console.log(err)
    }
}