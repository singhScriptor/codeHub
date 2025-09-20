var digitOfNumber=(n)=>{
    while(n > 0){
        let temp= n%10
        n=Math.floor(n/10)
        console.log(temp)
    }
}
digitOfNumber(153)