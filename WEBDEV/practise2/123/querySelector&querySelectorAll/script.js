let div=document.querySelectorAll('div')
div[0].style.backgroundColor='skyblue'
div[0].style.padding='10px'
div[0].style.borderTopLeftRadius='5px'
div[0].style.borderTopRightRadius='5px'

let header=document.querySelector('h1')
header.style.textAlign='right'

let header2=document.querySelector('h2')
header2.style.color='darkred'
header2.style.margin='20px'

div[2].style.backgroundColor='grey'
div[2].style.margin='20px'
div[2].style.padding='10px'
div[2].style.borderRadius='5px'

let list=document.querySelectorAll('li')

for(let i=0;i<list.length;i++){
    list[i].style.padding='10px'
    list[i].style.listStyle='none'
    list[i].style.marginTop='5px'
    list[i].style.borderRadius='5px'
    if(i % 2 === 0){
        list[i].style.backgroundColor='white'
    }
    else{
        list[i].style.backgroundColor='darkred'
        list[i].style.color='white'
    }
}