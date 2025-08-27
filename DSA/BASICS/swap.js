function swapNumber(a,b){
    return [b,a]
}
console.log(swapNumber(5,10)); // Output: [10, 5]

//2nd method

function swapNum(a,b){
    let temp=a
    a=b
    b=temp
    return [a,b]
}
console.log(swapNum(14,28)) // Output: [28, 14]