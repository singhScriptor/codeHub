var stockSpan=function(){
    this.stack=[]
}
stockSpan.prototype.next=function(price){
    let span=1
    while(this.stack.length > 0 && this.stack[this.stack.length-1].price <= price){
        span+=this.stack.pop().span 
    }
    this.stack.push({price,span})
    return span
}
function main(){
    const price=[100,90,80,60,75,85]
    let ans=new stockSpan()
    for(let i of price){
        let res=ans.next(i)
        console.log(`price: ${i}, span: ${res}`)
    }
}
main()