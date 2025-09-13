
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeLinkedListElement(head, val) {
    // your logic here
    let newNode= new ListNode(0)
    newNode.next=head
    let current=newNode
    while(current.next){
        if(current.next.val===val){
            current.next=current.next.next
        }
        else{
            current=current.next
        }
    }
    return newNode.next
}

