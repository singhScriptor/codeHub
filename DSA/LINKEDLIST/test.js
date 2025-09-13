let nonRepeatingCHar=(A)=>{
    let freq=new Array(26).fill(0)
    let stack=[],ans=''
    for(let i of A){
        let index=i.charCodeAt(0)-'a'.charCodeAt(0)
        stack.push(i)
        freq[index]++
        while(stack.length && freq[stack[0].charCodeAt(0)-'a'.charCodeAt(0)]>1){
            stack.shift()
        }
        if(stack.length){
            ans+=stack[0]
        }
        else{
            ans+='#'
        }
    }
    return ans

}
let A='abadbc'
console.log(nonRepeatingCHar(A))


let palindromeLinkedList=function(head){
    let fast=head,slow=head,prev=null
    while(fast && fast.next){
        fast=fast.next.next
        let next= slow.next
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
let head=[1,2]
console.log(palindromeLinkedList(head))
