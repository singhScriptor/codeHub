function countPrime(n){
    let isPrime=new Array(n).fill(true)
    isPrime[0]=isPrime[1]=false
    for(let i=2;i*i<n;i++){
        if(isPrime[i]){
            for(let j=i*i;j<n;j+=i){
                isPrime[j]=false
            }
        }
    }
    return isPrime.filter(sh=>sh).length
}
let n=10
console.log(countPrime(n))