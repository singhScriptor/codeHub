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
    insertNodeAtEnd(data){
        let newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            return
        }
        let current = this.head
        while(current.next){
            current=current.next
        }
        current.next=newNode
    }
    insertAtStart(data){
        let newNode=new Node(data)
        newNode.next=this.head
        this.head=newNode
    }
    insertAtMiddle(index,data){
        let newNode=new Node(data)
        if(index === 0 || !this.head){
            newNode.next=this.head
            this.head=newNode
            return 
        } 
        let current=this.head
        for(let i=0;i<index-1 && this.head;i++){
            current=current.next
        }           
        newNode.next=current.next
        current.next=newNode
    }
    printNodes(){
        let current=this.head
        while(current){
            console.log(current.data)
            current=current.next
        }
    }
}
let l=new LinkedList()
l.insertAtStart(12)
l.insertAtStart(24)
l.insertAtStart(45)
l.insertNodeAtEnd(54)
l.insertAtMiddle(1,23)
l.printNodes()