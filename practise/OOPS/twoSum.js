let TwoSum=function(nums,target){
    let left=0,right=nums.length-1
    while(left <= right ){
        let sum=nums[left]+nums[right]
        if(sum === target)return [left,right]
        else if(sum < target)left++
        else right --
    }
    return [-1,-1]
}
let nums = [2,7,11,15], target = 9
console.log(TwoSum(nums,target))

//2nd method

function twoSums(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            if(nums[i]+nums[j]=== target){
                return [i,j]
            }
        }
    }
    return none
}
let j=[2,7,11,15],t=9
console.log(twoSums(j,t)) 

//using map
let TwoSums=(nums,target)=>{
    let map=new Map()
    for(let i=0;i<nums.length;i++){
        let sum=target-nums[i]
        if(map.has(sum)){
            return [map.get(sum),i]
        }
        map.set(nums[i],i)
    }
    return [-1,-1]
}
let ums=[2,7,11,15],g=9
console.log(TwoSums(ums,g))
