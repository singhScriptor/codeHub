const linkedListII = (head)=>{
    if(!head || !head.next)return null
    let slow=head,fast=head
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
        if(slow === fast)break
    }
    if(!fast || !fast.next)return null
    slow=head
    while(slow !== fast){
        slow=slow.next
        fast=fast.next
    }
    return slow
}