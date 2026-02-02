let mainHeader=document.getElementById('main-header')

mainHeader.textContent="Fruit World"
mainHeader.style.color="orange"

let headerDiv=document.getElementById('header')
headerDiv.style.backgroundColor='green'
headerDiv.style.borderBottom='2px solid orange'
headerDiv.style.borderTopLeftRadius='5px'
headerDiv.style.borderTopRightRadius='5px'

let secondHeader=document.getElementById("second-header")
secondHeader.style.color='green'

let paragraph=document.createElement('p')
paragraph.id="thanks"
paragraph.textContent='Please visit us again'

let div=document.getElementById('div')
div.appendChild(paragraph)
