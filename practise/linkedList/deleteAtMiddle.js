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
    insertAtMiddle(index,data){
        let newNode=new Node(data)
        if(index === 0 || !this.head){
            newNode.next=this.head
            this.head=newNode
            return 
        }
        let current=this.head
        for(let i=0;i<index-1 && current.next;i++){
            current=current.next
        }
        newNode.next=current.next
        current.next=newNode

    }
    deleteAtMiddle(index){
        if(!this.head){
            console.log("head is empty")
            return 
        }
        if(index === 0){
            this.head=this.head.next
            return 
        }
        let current =this.head
        for(let i=0;i<index-1 && current.next;i++){
            current=current.next
        }
        if(!current.next){
            console.log('index out of bound')
            return 
        }
        current.next=current.next.next
    }
}