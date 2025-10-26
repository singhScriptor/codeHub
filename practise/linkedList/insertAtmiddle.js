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
    insertAtmiddle(index,data){
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
}