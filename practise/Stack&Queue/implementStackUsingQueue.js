var myStack=function(){
    this.stack=[]
}
myStack.prototype.push=function(x){
    this.stack.push(x)
}
myStack.prototype.pop=function(){
    if(!this.boolean_empty()){
        return this.stack.shift()
    }
}
myStack.prototype.top=function(){
    if(!this.boolean_empty()){
        return this.stack[0]
    }
}
myStack.prototype.boolean_empty=function(){
    return this.stack.length===0
}