function shuffleArray(nums,n){
    let result=[]
    for(let i=0;i<n;i++){
        result.push(nums[i])
        result.push(nums[i+n])
    }
    return result
}
let nums=[1,2,3,4,4,3,2,1],n=4
console.log(shuffleArray(nums,n))