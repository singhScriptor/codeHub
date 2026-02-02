let headerDiv=document.getElementsByClassName('header')[0]
headerDiv.style.backgroundColor='skyblue'
headerDiv.style.borderTopLeftRadius='5px'
headerDiv.style.borderTopRightRadius='5px'
headerDiv.style.padding='10px'

let list=document.getElementsByClassName('fruit')

list[2].style.backgroundColor='yellow'
for(let i=0;i<list.length;i++){
    list[i].style.fontWeight='bold'
}
