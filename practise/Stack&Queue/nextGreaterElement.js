let nextGreaterElement=(nums)=>{
    let arr=new Array(nums.length)
    for(let i =0;i<nums.length;i++){
        arr[i]=-1
        for(let j=i;j<nums.length;j++){
            let temp=(i+j)%nums.length
            if(nums[temp] > nums[i]){
                arr[i]=nums[temp]
            }
        }
    }
    return arr
}
let nums=[1,2,1]
console.log(nextGreaterElement(nums))