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
    printNodes(){
        let current=this.head
        while(current){
            console.log(current.data)
            current=current.next
        }
    }
}
let n=new LinkedList()
n.insertAtEnd(12)
n.insertAtEnd(24)
n.insertAtEnd(6)
n.printNodes()