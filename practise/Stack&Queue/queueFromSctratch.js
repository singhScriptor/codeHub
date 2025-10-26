class Queue{
    constructor(){
        this.queue=[]
    }
    enqueue(val){
        this.queue.push(val)
    }
    dequeue(){
        if(!this.is_empty()){
            return this.queue.shift()
        }
        return null
    }
    is_empty(){
        return this.queue.length===0
    }
    get_first_element(){
        return this.queue[0]
    }
}
let q=new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(43)
q.enqueue(31)
console.log(q)
console.log(q.dequeue())
console.log(q.is_empty())
console.log(q.get_first_element())