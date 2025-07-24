// while loop 

function reverseNumber(n){
    let rev=0
    while(n > 0){
        let temp=n%10
        rev= rev*10+temp
        n=Math.floor(n/10)

    }
    return rev
}
console.log(reverseNumber(123))


// for loop 

function revNumber(num){
    let rev=0
    for(let i=num;i > 0; i= Math.floor(i/10)){
        let temp=i%10
        rev= rev * 10 + temp
        num=Math.floor(num/10)
    }
    return rev
} 
console.log(revNumber(123))


