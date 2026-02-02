let deleteElement=function(head){
    let size=0
    let fast=head
    while(fast){
        size++
        fast=fast.next
    }
    if(size < 3){
        return head
    }
    size=size-3
    let slow=head
    for(let i=0;i<size-1;i++){
        slow=slow.next
    }
    slow.next=slow.next.next
}