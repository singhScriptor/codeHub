// this method will exceed the time limit 

let countPrimes=function(n){
    let set=new Set()
    for(let i=2;i<n;i++){
        set.add(i)
    }
    for(let i=2;i*i<n;i++){
        if(set.has(i)){
            for(let j=i*i;j<n;j+=i){
                set.delete(j)
            }
        }
    }
    return set.size

}
let n=10
console.log(countPrimes(n))


//2nd method 

let CountPPrimes=function(n){
    let isPrime=new Array(n).fill(true)
    isPrime[0]=isPrime[1]=false
    for(let i=2;i*i<n;i++){
        if(isPrime[i]){
            for(let j=i*i;j<n;j+=i){
                isPrime[j]=false
            }
        }
    }
    return isPrime.filter(prime=>prime).length
}
let  v=10
console.log(CountPPrimes(v))  

