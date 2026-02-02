let headerDiv=document.getElementsByTagName('div')[0]
headerDiv.style.backgroundColor='skyblue'
headerDiv.style.padding='10px'
headerDiv.style.borderTopRightRadius='5px'
headerDiv.style.borderTopLeftRadius='5px'

let newli=document.createElement('li')
newli.textContent='Mango'
newli.style.color='blue'

let ul=document.getElementsByTagName('ul')[0]
ul.appendChild(newli)

let list=document.getElementsByTagName('li')
for(let i=0;i<list.length;i++){
    list[i].style.fontStyle='italic'
}