let button=document.getElementsByTagName('button')[0]

let count=1
button.addEventListener('click',function(e){
    e.preventDefault()
    //console.log("Clicked",count++)
    button.innerHTML=count++
})

button.addEventListener('mouseover',function(e){
    e.preventDefault()
    button.innerHTML="mouse is overed"

})

button .addEventListener('mouseout',function(e){
    e.preventDefault()
    button.innerHTML="mouse is out"
})

