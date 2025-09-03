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
    insertAtStart(data){
        let newNode=new Node(data)
        newNode.next=this.head
        this.head=newNode
    }
    deleteAtStart(){
        if(this.head){
            return this.head=this.head.next
        }
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
l.insertAtStart(36)
l.insertAtStart(48)
l.deleteAtStart()
l.printNodes()