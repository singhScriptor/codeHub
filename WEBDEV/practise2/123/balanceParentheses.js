let balanceParentheses=function(s){
    let dict={']':'[','}':'{',')':'('},stack=[]
    for(let i of s){
        if(i in dict){
            if(stack.length === 0 || stack.pop() !== dict[i])return false
        }
        else stack.push(i)
    }
    return stack.length === 0
}
let s="({})"
console.log(balanceParentheses(s))