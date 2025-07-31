function alternateBits(n){
    let temp=n^(n>>1)
    return (temp &(temp+1))===0
}
console.log(alternateBits(5))

// 2nd method

function alternateBits(n){
    n=n.toString(2)
    for(let i =1;i<n.length;i++){
        if(n[i] === n[i-1]){
            return false
        }
    }
    return true
}
let n=5
console.log(alternateBits(n))