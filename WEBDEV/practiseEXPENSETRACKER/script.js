let balanceEl=document.getElementById('balance')
let totalIncomeEl=document.getElementById('totalincome')
let totalExpenseEl=document.getElementById('totalexpense')


let addExpense=document.getElementById('addexp')
let userList=document.getElementById('outputul')

let addIncome=document.getElementById('add')

let totalIncome=0
let totalexpense=0

addIncome.addEventListener('click',showTotalIncome)

addExpense.addEventListener('click',addExpenseDetails)

function showTotalIncome(e){
    e.preventDefault()
    let income=Number(document.getElementById('income').value);
    totalIncome+=income
    if(income < 0){
        alert("kindly enter the valid amount")
        return
    }
    

    totalIncomeEl.textContent=`Total Income :${totalIncome}`
    balanceEl.textContent=`Balance :${totalIncome-totalexpense}`

    localStorage.setItem('totalIncome',totalIncome)

    //clear 
    document.getElementById('income').value='';

}

function addExpenseDetails(e){
    e.preventDefault()
    let expenseData={
        amount:document.getElementById('amount').value,
        description:document.getElementById('description').value,
        option:document.getElementById('category').value
    }
    if(expenseData){
        localStorage.setItem('expenseData',JSON.stringify(expenseData))
        displayDetails(expenseData)
    }
    else{
        prompt("kindly enter the details first")
    }
    totalexpense+=Number(expenseData.amount)
    totalExpenseEl.textContent=`Total Expense : ${totalexpense}`
    balanceEl.textContent=`Balance : ${totalIncome-totalexpense}`

    document.getElementById('amount').value=''
    document.getElementById('description').value=''
    document.getElementById('category').value=''
}
function displayDetails(expenseData){
    let list=document.createElement('li')
    list.style.padding='10px';
    list.style.fontWeight="900";
    list.style.backgroundColor="rgba(202, 215, 202, 0.9)"
    list.style.borderRadius="5px"
    list.style.margin='5px'
    list.style.listStyleType='none'
    list.textContent=`Amount:${expenseData.amount}, Description: ${expenseData.description}, Category: ${expenseData.option}`
    userList.appendChild(list)

}