let minimumSwap=function(nums){
    let count=0
    for(let i=0;i<nums.length;i++){
        let temp=i
        for(let j=i;j<nums.length;j++){
            if(nums[j] < nums[temp]){
                temp=j
            }
        }
        if(temp !== i){
            let ans=nums[i]
            nums[i]=nums[temp]
            nums[temp]=ans
            count++
        }
    }
    return count
}
let nums=[10,19,6,3,5]
console.log(minimumSwap(nums))