let removeNthNode=(head,k)=>{
    let newNode=new ListNode(0)
    newNode.next=head
    let slow=newNode,fast=newNode
    for(let i=0;i<=k;i++){
        fast=fast.next
    }
    while(fast){
        slow=slow.next
        fast=fast.next
    }
    slow.next=slow.next.next
    return newNode.next
}