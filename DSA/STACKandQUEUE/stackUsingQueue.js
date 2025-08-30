class MyStack{
    constructor(){
        this.stack=[]
    }
    push(x){
        this.stack.push(x)
    }
    pop(){
        if(!this.empty()){
            return this.stack.pop()
        }
    }
    top(){
        if(!this.empty()){
            return this.stack[this.stack.length-1]
        }
    }
    empty(){
        return this.stack.length===0
    }
}
let s=new MyStack()
s.push("Hello")
s.push("World")
s.push(23)
s.push(32)
s.push(43)
s.push("Hey There")
s.push(98)
console.log(s)
console.log(s.empty())
console.log(s.pop())
console.log(s.top())

