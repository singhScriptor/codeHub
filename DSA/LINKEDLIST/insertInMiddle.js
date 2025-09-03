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
    insertNodeMiddle(index,data){
        let newNode=new Node(data)
        if(index === 0 || !this.head){
            newNode.next=this.head
            this.head=newNode
            return
        }
        let current=this.head
        for(let i=0;i<index && this.head;i++){
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
let lin=new linkedList()
lin.insertNodeMiddle(2,44)
lin.insertNodeMiddle(4,32)
lin.insertNodeMiddle(0,12)
lin.insertAtMiddle(3,"hello")
lin.printNodes()