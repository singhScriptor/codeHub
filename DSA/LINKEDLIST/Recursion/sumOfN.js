let sumOfN=(n)=>{
    if(n === 0)return 0
    return n + sumOfN(n-1)
}
let n=5
console.log(sumOfN(n))