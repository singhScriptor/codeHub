function hammingWeight(n){
    let count=0
    while(n){
        n&=(n-1)
        count++
    }
    return count++
}
let n=0b00000000000000000000000000001011
console.log(hammingWeight(n))


//2nd method 
function hamWeight(n){
    n=n.toString(2)
    let count=0
    for(let i=0;i<n.length;i++){
        if(n[i] === '1')count++
    }
    return count
}
let m=0b00000000000000000000000000001011
console.log(hamWeight(m))