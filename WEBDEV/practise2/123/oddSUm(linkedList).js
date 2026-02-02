let findSum=function(head){
    let sum=0
    while(head){
        if(head.val % 2 !== 0 ){
            sum+=head.val
        }
        head=head.next
    }
    return sum
}