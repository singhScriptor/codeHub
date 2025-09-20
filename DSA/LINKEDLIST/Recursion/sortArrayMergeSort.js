let sortArray=function(nums){
    if(nums.length <= 1)return nums
    let index=Math.floor(Math.random()*nums.length)
    let merge=nums[index]
    let left=[],right=[],mid=[]
    for(let i of nums){
        if(i<merge){
            left.push(i)
        }
        else if(i> merge){
            right.push(i)
        }
        else{
            mid.push(i)
        }
    }
    return sortArray(left).concat(mid,sortArray(right))
}
let nums=[5,2,3,1]
console.log(sortArray(nums))