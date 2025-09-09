let rotateList=function (head,k){
    if(!head || !head.next || k===0)return head
    let temp=head,len=1
    while(temp.next){
        temp=temp.next
        len++
    }
    k=len-(k%10)
    temp.next=head
    while(k>0){
        temp=temp.next
        k--
    }
    head=temp.next
    temp.next=null
    return head
}



