class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class linkedList{
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
    printList(){
        let current=this.head
        while(current){
            console.log(current.data)
            current=current.next
        }
    }
}

let n=new linkedList()
n.insertAtEnd(10)
n.insertAtEnd(23)
n.insertAtEnd(32)
n.printList()