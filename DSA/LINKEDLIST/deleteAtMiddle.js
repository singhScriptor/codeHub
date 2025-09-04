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
        let newNode= new Node(data)
        if(index === 0 || !this.data){
            newNode.next=this.head
            this.head=newNode
            return
        }
        let current = this.head
        for(let i=0;i<index-1 && current;i++){
            current=current.next
        }
        newNode.next=current.next
        current.next=newNode
    }
    deleteAtMiddle(){
        if(!this.head)return 
        if(index === 0){
            this.head=this.head.next
            return
        }
        let current=this.head
        for(let i=0;i<index-1 && current;i++ ){
            current=current.next
        }
        if(current.next){
            current.next=current.next.next
        }
    }
    printNodes(){
        let current=this.Node
        while(current){
            console.log(current.data)
            current=current.next
        }
    }
}