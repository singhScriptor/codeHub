
// while loop
function printDigit(n){
    while( n > 0){
        let temp=n%10
        n=Math.floor(n/10)
        console.log(temp)
    }
}
printDigit(153)

// for loop 
function printDigits(n){
    for(let i=1;i<=n;i++){
        let temp=n%10
        n=Math.floor(n/10)
        console.log(temp)
    }
}
printDigits(351)



