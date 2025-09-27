function altBits(n){
    n=n.toString(2)
    for(let i=1;i<n.length;i++){
        if(n[i] === n[i-1])return false
    }
    return true
}
let n=7
console.log(altBits(n))