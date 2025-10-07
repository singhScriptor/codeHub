function validAte(s){
    while(s.length){
        let temp=s 
        s=s.replace('{}',''),
        s=s.replace('[]',''),
        s=s.replace('()','')
        if(temp===s)return false
    }
    return true
}
let s='{}'
console.log(validAte(s))


let validParenthesis=function(s){
    let dict={']':'[','}':'{',')':'('},stack=[]
    for(let i of s){
        if(i in dict){
            if(stack.length === 0 || stack.pop() !== dict[i]){
                return false
            }
        }
        else{
            stack.push(i)
        }
    }
    return stack.length === 0

}
let b='{}'
console.log(validParenthesis(b))
