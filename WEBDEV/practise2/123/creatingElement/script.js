let div=document.querySelectorAll('div')

let h3=document.createElement('h3')
h3.textContent="Buy high quality organic fruits online"
h3.style.fontStyle='italic'

div[0].appendChild(h3)

let p=document.createElement('p')
p.textContent="Total fruits: 4"
p.id='fruits-total'

div[1].appendChild(p)

let ul=document.querySelector('ul')

div[1].insertBefore(p,ul)



