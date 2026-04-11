function shuffleArray(nums,n){
    let arr=[]
    for(let i=0;i<n;i++){
        arr.push(nums[i],nums[i+n])
    }
    return arr
}
let  nums = [2,5,1,3,4,7], n = 3
console.log(shuffleArray(nums,n))

// 2ndMethod

// two pointers

function shuffleArray2(nums,n){
    let left=0,right=n ,arr=[]
    while(left < n){
        arr.push(nums[left],nums[right])
        left++
        right++
    }
    return arr
}
let  jums = [2,5,1,3,4,7], m = 3
console.log(shuffleArray2(jums,m))