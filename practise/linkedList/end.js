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
    insertAtEnd(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            return
        }
        let current=this.head
        while(current.next){
            current=current.next
        }
        current.next=newNode
    }
}