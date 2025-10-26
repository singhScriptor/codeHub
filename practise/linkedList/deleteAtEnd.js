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
    deleteAtEnd(){
        if(!this.head){
            console.log('Already empty')
            return
        }
        if(!this.head.next){
            this.head=null
            return
        }
        let current=this.head
        while(current.next.next){
            current=current.next
        }
        current.next=null
    }
}