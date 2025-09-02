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
    insertAtMiddle(index,data){
        let newNode=new Node(data)
        if(index===0 || !this.head){
            newNode.next=this.head
            this.head=newNode
            return
        }
        let current=this.head
        for(let i=0;i<index-1 && current.next;i++){
            current = current.next
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
let v=new linkedList()
v.insertAtMiddle(0,12)
v.insertAtMiddle(2,23)
v.insertAtMiddle(1,32)
v.printNodes()