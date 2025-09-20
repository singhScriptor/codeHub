let nPrimeNumber=(n)=>{
    let x=2,count=0,arr=[]
    while(arr.length <= n){
        let flag=true
        for(let i=2;i<x;i++){
            if((x%i)===0){
                flag=false
                break
            }
        }
        if(flag){
            arr.push(x)
            count++
        }
        if(count === n){
            break
        }
        x++
    }
    return arr
}
console.log(nPrimeNumber(5))