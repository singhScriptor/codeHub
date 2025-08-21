class miniStack{
    constructor(){
        this.stack=[]
        this.minStack=[]
    }
    push(val){
        this.stack.push(val)
        if(this.minStack.length === 0){
            this.minStack.push(val)
        }
        else{
            let mini=this.minStack[this.minStack.length-1]
            this.minStack.push(Math.min(mini,val))
        }
    }
    pop(){
        if(this.stack.length !== 0){
            this.stack.pop()
            this.minStack.pop()
        }
    }
    top(){
        if(this.stack.length !== 0){
            return this.stack[this.stack.length-1]
        }
        return null
    }
    minimum(){
        if(this.stack.length !== 0){
            return this.minStack[this.minStack.length-1]
        }
        else{
            return null
        }
    }
}
let m=new miniStack()
m.push(4)
m.push(6)
m.push(3)
m.push(8)
m.push(-1)

console.log(m)
console.log(m.top())
m.pop()

console.log(m.minimum())