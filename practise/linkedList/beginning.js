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
    print(){
        let current=this.head
        while(current){
            console.log(current.data)
            current=current.next
        }
    }

}