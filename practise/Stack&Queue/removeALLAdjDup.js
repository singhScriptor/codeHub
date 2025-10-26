let removeAllAdjacentDuplicate=function(s){
    let stack=[]
    for(let i of s){
        if(stack.length && stack[stack.length-1]===i){
            stack.pop()
        }
        else{
            stack.push(i)
        }
    }
    return stack.join('')
}
let s="abbaca"
console.log(removeAllAdjacentDuplicate(s))



let removeDup=function(v){
    let stack=[]
    for(let i of v){
        if(stack.length && stack[stack.length-1]===i){
            stack.pop()
        }
        else{
            stack.push(i)
        }
    }
    return stack.join('')
}
let v="abbaca"
console.log(removeDup(v))


