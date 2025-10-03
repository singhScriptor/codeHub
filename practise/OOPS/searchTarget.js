let search=function (nums,target){
    let l=0,h=nums.length-1
    while(l<=h){
        let mid=Math.floor((l+h)/2)
        if(nums[mid] === target)return mid
        else if(nums[mid] >= nums[l]){
            if(target < nums[mid] && target >= nums[l]){
                h=mid-1 
            }
            else{
                l=mid+1
            }
        }
        else{
            if(target >= nums[mid] && target <= nums[h]){
                l=mid+1
            }
            else{
                h=mid-1 
            }
        }
    }
    return -1
}
let nums=[4,5,6,7,0,1,2],target=0
console.log(search(nums,target))