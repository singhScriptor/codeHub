let hamminghWeight=function(n){
    let count=0
    while(n){
        n=n&(n-1)
        count++
    }
    return count
}
let n='0b0000000000001011'
console.log(hamminghWeight(n))


let hmWeight=(n)=>{
    n=n.toString(2)
    let count=0
    for(let i=0;i<n.length;i++){
        if(n[i] === '1'){
            count++
        }
    }
    return count
}
let v='0b000000000000001011'
console.log(hmWeight(v))