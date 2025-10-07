var MinStack=function(){
    this.stack=[]
}
MinStack.prototype.push=function(val){
    this.stack.push(val)
}
MinStack.prototype.pop=function(){
    return this.stack.pop()
}
MinStack.prototype.top=function(){
    return this.stack[this.stack.length-1]
}
MinStack.prototype.getMin=function(){
    //return Math.min(...this.stack)
    return Math.min(... this.stack.filter(sh=>typeof sh==="number"))
}
let mini=new MinStack()
mini.push(-2)
mini.push(-4)
mini.push(12)
mini.push(19)
mini.push('Ram')
mini.push("Ravan")
mini.pop()
console.log(mini)
console.log(mini.top())
console.log(mini.getMin())