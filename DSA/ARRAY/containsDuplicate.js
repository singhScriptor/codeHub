function containsDuplicate(nums){
    let set=new Set(nums)
    return set.size !== nums.length
}
let nums=[1,2,3,4]
console.log(containsDuplicate(nums))

//2nd method
function checkDup(nums){
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        if(nums[i] === nums[i+1])return true
    }
    return false
}
let num=[1,2,3,4]
console.log(checkDup(num))