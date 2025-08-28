class Queue{
    constructor(){
        this.queue=[]
    }
    Enqueue(val){
        this.queue.push(val)
    }
    Dequeue(){
        if(!this.isEmpty()){
            this.queue.pop()
        }
    }
    isEmpty(){
        return this.queue.length === 0 
    }
    get_first_element(){
        if(!this.isEmpty()){
            return this.queue[0]
        }
    }
}

let q=new Queue()
q.Enqueue(4)
q.Enqueue(7)
q.Enqueue(0)
q.Enqueue(23)
q.Enqueue(6)
console.log(q.get_first_element())