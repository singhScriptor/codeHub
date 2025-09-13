let mergeTwoList=function(list1,list2){
    let newNode=new ListNode(0)
    let temp=newNode
    while(list1 && list2){
        if(list1.val < list2.val){
            temp.next=list1
            list1=list1.next

        }
        else{
            temp.next=list2
            list2=list2.next
        }
        temp=temp.next
    }
    if(list1) temp.next=list1
    if(list2) temp.next=list2
    return newNode.next
}