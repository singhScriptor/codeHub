function decodeString(s){
    let stack=[],str='',num=0
    for(let i of s){
        if(!isNaN(i)){
            num=num*10+parseInt(i)
        }
        else if(i==='['){
            stack.push(str)
            stack.push(num)
            str=''
            num=0

        }
        else if(i === ']'){
            let prevNum=stack.pop()
            let prevStr=stack.pop()
            str=prevStr+str.repeat(prevNum)
        }
        else{
            str+=i
        }
    }
    return str
}

let  s = "3[a]2[bc]"
console.log(decodeString(s))