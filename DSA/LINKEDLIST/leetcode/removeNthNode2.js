const removeNthNode=(head,n)=>{
    let newNode=new ListNode(0)
    newNode.next=head
    let slow=newNode,fast=newNode
    for(let i=0;i<=n;i++){
        fast=fast.next
    }
    while(fast){
        slow=slow.next
        fast=fast.next
    }
    slow.next=slow.next.next
    return newNode.next
}