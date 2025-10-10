let validParentesis=function(s){
    while(s.length){
        let temp=s
        s=s.replace('[]','')
        s=s.replace('{}','')
        s=s.replace('()','')
        if(s === temp){
            return false
        }
    }
    return s.length === 0
}
let s='()[]{}{)'
console.log(validParentesis(s))

//2nd method
function valid(s){
    let dict={'}':'{',']':'[',')':'('},stack=[]
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
let p='[]'
console.log(valid(p))
