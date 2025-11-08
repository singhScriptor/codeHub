let userList=document.getElementById('ul')
let list=document.createElement('li')
//list.innerHTML=`<span style="background-color:green">Hello</span>`
list.textContent="hello"
list.style.backgroundColor="green"

let list2=document.createElement('li')
list2.style.backgroundColor="yellow"

userList.appendChild(list)

userList.appendChild(list2)



