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
    insertAtbeginning(data){
        const newNode=new Node(data)
        newNode.next=this.head
        this.head=newNode
    }
    display(){
        let current=this.head
        let output=''
        while(current){
            output+=current.data+' ->'
            //console.log(current.data)
            
            current=current.next
        }
        console.log(output+'null')
    }
}
let l1=new LinkedList()
l1.insertAtbeginning(2)
l1.insertAtbeginning(34)
l1.insertAtbeginning(21)
l1.display()