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
        let newNode=new Node(data)
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
    deleteNodeAtEnd(){
        let current=this.head
        if(!current)return 
        if(!current.next){
            this.head=null
            return
        }
        while(current.next.next){
            current=current.next
        }
        current.next=null
    }
}