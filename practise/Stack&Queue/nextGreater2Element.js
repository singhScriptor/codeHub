let nextGreaterElement=(nums)=>{
    let arr=new Array(nums.length).fill(-1)
    for(let i=0;i<nums.length;i++){
        for(let j=1;j<nums.length;j++){
            let temp=(i+j)%nums.length
            if(nums[temp] > nums[i]){
                arr[i]=nums[temp]
            }
        }
    }
    return arr
}
let arr=[1,2,1]
console.log(nextGreaterElement(arr))