let stockSpan=function(price){
    let span=1,stack=[]
    while(stack.length>0 && stack[stack.length-1].price<=price){
        span+=stack.pop().span 
    }
    stack.push({price,span})
    return span
}
