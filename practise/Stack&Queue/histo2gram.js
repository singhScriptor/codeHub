function histogram(heights){
    heights.push(0)
    let maxi=0,stack=[-1]
    for(let i=0;i<heights.length;i++){
        while(heights[i]< heights[stack[stack.length-1]]){
            let left=heights[stack.pop()]
            let right=i-stack[stack.length-1]-1
            maxi=Math.max(maxi,(left*right))
        }
        stack.push(i)
    }
    stack.pop()
    return maxi 
}
let heights=[2,1,5,6,2,3]
console.log(histogram(heights))
