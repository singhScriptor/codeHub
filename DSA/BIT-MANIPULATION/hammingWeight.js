function hammingWeight(n){
    n=n.toString(2)
    let count=0
    for(let i=0;i<=n.length;i++){
        if(n[i]==='1'){
            count++
        }
    }
    return count
}
let n= 00000000000000000000000000001011
console.log(hammingWeight(n))