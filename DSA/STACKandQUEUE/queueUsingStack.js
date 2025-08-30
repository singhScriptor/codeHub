class myQueue{
     constructor(){
        this.queue=[]
     }
     push(x){
        this.queue.push(x)
     }
     pop(){
        if(this.empty()){
            return -1
        }
        return this.queue.shift()
     }
     peek(){
        if(this.empty()){
            return -1
        }
        return this.queue[0]
     }
     empty(){
        return this.queue.length===0
     }
}
let q=new myQueue()
q.push(12)
q.push("hello")
q.push("Hey world")
q.push(32)
q.push('x42')
console.log(q)
console.log(q.pop())
console.log(q.peek())
console.log(q.empty())