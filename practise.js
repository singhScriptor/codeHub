class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }
    append(data){
        let newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            return
        }
        let current=this.head
        while(current){
            current=current.next
        }
        current.next=newNode

    }
    
}
