var miniStack=function(){
    this.stack=[]
    this.minStack=[]
}
miniStack.prototype.push=function(val){
    this.stack.push(val)
    if(this.minStack.length === 0){
        this.minStack.push(val)
    }
    else{
        let mini=this.minStack[this.minStack.length-1]
        this.minStack.push(Math.min(val,mini))
    }
}
miniStack.prototype.pop=function(){
    if(this.stack.length !== 0){
        this.stack.pop()
        this.minStack.pop()
    }    
}
miniStack.prototype.top=function(){
    if(this.stack.length !== 0){
        return this.stack[this.stack.length-1]
    }
    else{
        return null
    }
}
miniStack.prototype.minimum=function(){
    if(this.stack.length !== 0){
        return this.minStack[this.minStack.length-1]
    }
    else{
        return null
    }
}

const st=new miniStack()
st.push(5)
st.push(4)
st.push(8)
st.push(2)

console.log(st)

console.log(st.top())
console.log(st.minimum())

st.pop()