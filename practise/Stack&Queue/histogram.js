let histogram=function(heights){
    heights.push(0)
    let maxi=0,stack=[-1]
    for(let i=0;i<heights.length;i++){
        while(height[i] < heights[stack[stack.length-1]]){
            left=heights[stack.pop()]
            right=i-stack[stack.length-1]-1
        }
    }
}