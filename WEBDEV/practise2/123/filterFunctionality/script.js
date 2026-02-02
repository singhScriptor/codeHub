let input=document.querySelectorAll('input')

input[0].addEventListener('keyup',filterFunction)

function filterFunction(e){
    e.preventDefault()
    let filterText=e.target.value.toLowerCase();
    let items=document.querySelectorAll('li')
    for(let i=0;i<items.length;i++){
        let fruit=items[i].textContent.toLowerCase()
        if(fruit.indexOf(filterText) !== -1){
            items[i].style.display='flex'
            //items[i].style.alignItems='center'
        }
        else{
            items[i].style.display='none'
        }
    }
}