let trappingWater=(height)=>{
    let left=0,right=height.length-1,leftMax=height[left],rightMax=height[right],ans=0
    while(left < right){
        if(leftMax < rightMax){
            left++
            leftMax=Math.max(leftMax,height[left])
            ans+=leftMax-height[left]
        }
        else{
            right--
            rightMax=Math.max(rightMax,height[right])
            ans+=rightMax-height[right]
        }
    }
    return ans
}
let height=[0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trappingWater(height))