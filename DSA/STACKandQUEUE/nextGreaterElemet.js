function nextGreaterElement(nums){
    let arr=new Array(nums.length)
    for(let i=0;i<nums.length;i++){
        arr[i]=-1
        for(let j=1;j<nums.length;j++){
            let index=(i+j)%nums.length
            if(nums[index]>nums[i]){
                arr[i]=nums[index]
                break
            }
        }
    }
    return arr
}
let num=[1,2,1]
console.log(nextGreaterElement(num))