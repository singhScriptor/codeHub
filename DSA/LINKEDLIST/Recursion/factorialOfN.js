let factorial=(n)=>{
    if(n === 0 || n === 1)return 1
    return n*factorial(n-1)
}
console.log(factorial(5))


function fFactorial(p){
    let j=1
    for(let i=1;i<=p;i++){
        j*=i
    }
    return j
}
console.log(fFactorial(5))

let facto=(v)=>{
    let a=1,b=1
    while(b<=v){
        a*=b
        b++
    }
    return a
}
console.log(facto(5))