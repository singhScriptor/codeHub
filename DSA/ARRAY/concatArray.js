function concatArray(nums){
    return nums.concat(nums)
}
let nums=[1,2,1]
console.log(concatArray(nums))


// using spread operator 
function concatArray2(nums){
    return [...nums,...nums]
}
let jums=[1,2,1]
console.log(concatArray2(jums))

// using loop 
function concatArray3(nums){
    let ans=[]
    for(let i=0;i<nums.length;i++){
        ans[i]=nums[i]
        ans[i+nums.length]=nums[i]
    }
    return ans
}
let arr1=[1,2,1]
console.log(concatArray3(arr1))