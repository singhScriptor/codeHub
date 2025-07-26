function rotatedArray(nums,k){
    k=k%nums.length
    rotated=nums.slice(-k).concat(nums.slice(0,nums.length-k))
    for(let i=0;i<nums.length;i++){
        nums[i]=rotated[i]
    }
    return rotated

}
let nums=[1,2,3,4,5,6,7],k=3
console.log(rotatedArray(nums,k))