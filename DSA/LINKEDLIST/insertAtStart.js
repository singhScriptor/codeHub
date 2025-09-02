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
    insertAtStart(data){
        let newNode=new Node(data)
        newNode.next=this.head
        this.head=newNode
    }
    printNode(){
        let current=this.head
        while(current){
            console.log(current.data)
            current=current.next
        }
    }
}
let v=new linkedList()
v.insertAtStart(32)
v.insertAtStart(12)
v.insertAtStart(6)
v.printNode()