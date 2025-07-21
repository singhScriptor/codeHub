function swapTwoNumber(a,b){
    let temp=a
    a=b
    b=temp
    return [a,b]
}
console.log(swapTwoNumber(5,10)) // [10, 5]

function sNumber(a,b){
    return [b,a]
}
console.log(sNumber(25,14)) // [14, 25]