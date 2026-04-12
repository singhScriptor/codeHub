function AddArrayFormint(nums,k){
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum=sum*10+nums[i]
    }
    sum+=k
    let arr=[]
    while(sum){
        let digit=sum%10
        arr.unshift(digit)
        sum=Math.floor(sum/10)
    }
    return arr
}
let nums=[1,2,0,0],k=34
console.log(AddArrayFormint(nums,k))


//2nd method 
function addArrayFromInt(nums,k){
    return (BigInt(nums.join(''))+ BigInt(k)).toString().split('').map(Number)
}
let num=[1,2,0,0],p=34
console.log(addArrayFromInt(nums,p))
