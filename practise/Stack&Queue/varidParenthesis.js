var validParenthesis=function(s){
    while(s.length){
        let temp=s
        s=s.replace('{}','')
        s=s.replace("[]",'')
        s=s.replace('{}','')
        if(s===temp)return false
    }
    return true
}
let s='{}'
console.log(validParenthesis(s))


let valid=function(s){
    let dict={']':'[','}':'{',')':'('}
    let stack=[]
    for(let i of s){
        if(i in dict){
            if(stack.length===0 || stack.pop() !== dict[i]){
                return false
            }
        }
        else{
            stack.push(i)
        }
    }
    return stack.length === 0
}
let j='{}'
console.log(valid(j))