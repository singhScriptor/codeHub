let ArmStrong=(n)=>{
    let temp=n ,sum=0
    while(temp > 0){
        let ans= temp%10
        sum+=ans**3
        temp=Math.floor(temp/10)
    }
    return n===sum
}
let n=153
console.log(ArmStrong(n))