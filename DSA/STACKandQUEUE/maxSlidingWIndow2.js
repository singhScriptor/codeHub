function maxSlidingWindow(nums,k){
    let dequeue=[],ans=[]
    for(let i=0;i<nums.length;i++){
        while(dequeue.length && dequeue[0] < i-k+1){
            dequeue.shift()
        }
        while(dequeue.length && nums[dequeue[dequeue.length-1]]<nums[i]){
            dequeue.pop()
        }
        dequeue.push(i)
        if(i>=k+1){
            ans.push(nums[dequeue[0]])
        }
    }
    return ans
}
let nums=[1,3,-1,-3,5,3,6,7], k = 3
console.log(maxSlidingWindow(nums,k)) 
