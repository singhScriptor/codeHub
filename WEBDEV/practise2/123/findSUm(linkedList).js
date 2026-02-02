class Node{
    constructor(data){
        this.data=data
        this.Next=null
    }
}
class linkedList{
    constructor(){
        this.head=null
    }
    addNode(data){
        let newNode=new Node(data)
        if(this.head){
            this.head=newNode
            return
        }
        let temp=this.head
        while(temp.next){
            temp=temp.next
        }
        temp.next=newNode
    }
    findSum(){
        let sum=0
        let temp=this.head
        while(temp){
            if(temp%2 !==0){
                sum+=temp.data
            }
            temp=temp.next
        }
        return sum
    }
}