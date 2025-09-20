let reverseNumber=(n)=>{
    let rev=0
    while(n > 0){
        let temp= n%10
        rev=rev*10+temp
        n=Math.floor(n/10)
    }
    return rev
}
console.log(reverseNumber(123))