let swapNumber=function(a,b){
    return [a,b]=[b,a]
}
let a=5,b=10
console.log(swapNumber(a,b))

//or 

let swapBetweenTwo=function(a,b){
    let temp=a 
    a=b
    b=temp 
    console.log(`a = ${a} , b = ${b}`)
}
let c=3,d=4
swapBetweenTwo(c,d)


