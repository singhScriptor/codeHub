var myCircularQUeue=function(k){
    this.queue=[]
    this.k=k
}
myCircularQUeue.prototype.enqueue=function(val){
    if(!this.isFull()){
        this.queue.push(val)
        return true
    }
    return false
}
myCircularQUeue.prototype.dequeue=function(){
    if(!this.isEmpty()){
        this.queue.shift()
        return true
    }
    return false
}
myCircularQUeue.prototype.isEmpty=function(){
    return this.queue.length===0
}
myCircularQUeue.prototype.isFull=function(){
    return this.queue.length===this.k
}
myCircularQUeue.prototype.isRear=function(){
    if(!this.isEmpty()){
        return this.queue[this.queue.length-1]
    }
}
myCircularQUeue.prototype.isFront=function(){
    if(!this.isEmpty()){
        return this.queue[0]
    }
}
