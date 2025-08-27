function divideTwoInt(dividend,divisor){
    let div=Math.floor(dividend/divisor)
    if(div > 2147483648){
        return 2147483647
    }
    else if(div < -2147483648){
        return -2147483648
    }
    else{
        return div
    }
}
let dividend=10,divisor=3
console.log(divideTwoInt(dividend,divisor))


let s="hello world"
console.log(s.includes('hello'))

// ans=s.split(' ')
// console.log(ans)

function doSplit(s){
    let word=''
    for(let i of s){
        if(i === ' '){
            break
        }
        else{
            word+=i
        }
    }
    console.log(word)
}
doSplit(s)