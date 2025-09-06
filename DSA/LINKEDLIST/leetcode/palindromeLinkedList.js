let palindromeLinkedList=function (head){
    let slow=head,fast=head,prev=null
    while(fast && fast.next){
        fast=fast.next.next
        let next=slow.next
        slow.next=prev
        prev=slow
        slow=next
    }
    if(fast)slow=slow.next
    while(prev && slow){
        if(prev.val !== slow.val)return false
        prev=prev.next
        slow=slow.next
    }
    return true
}