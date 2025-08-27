function trappingWater(height){
    let left=0
    let right=height.length-1
    let leftHeight=height[left]
    let rightHeight=height[right]
    let ans=0
    while(left < right){
        if(leftHeight < rightHeight){
            left++
            leftHeight=Math.max(leftHeight,height[left])
            ans+=leftHeight-height[left]
        }
        else{
            right--
            rightHeight=Math.max(rightHeight,height[right])
            ans+=rightHeight-height[right]
        }
    }
    return ans
}
let height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trappingWater(height))