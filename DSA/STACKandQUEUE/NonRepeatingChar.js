function nonRepeatCHar(A){
    let freq=new Array(26).fill(0)
    let stack=[],ans=''
    for(let i of A){
        let index=i.charCodeAt(0)-'a'.charCodeAt(0)
        freq[index]++
        stack.push(i)
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
console.log(nonRepeatCHar(A))