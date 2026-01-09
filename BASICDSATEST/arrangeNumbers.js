// let arrangeNumbers=function(nums){
//     let sorted=[...nums].sort((a,b)=>a-b)
//     let index=0
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] !== sorted[i]){
//             index++
//         }
//     }
//     return Math.floor(index/2)
// }
// let nums=[10,19,6,3,5]
// console.log(arrangeNumbers(nums))  

let minSwap=function(arr){
    let count=0
    for(let i=0;i<arr.length-1;i++){
        let temp=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[temp]){
                temp=j
            }
        }
        if(temp !== i){
            let ans=arr[i]
            arr[i]=arr[temp]
            arr[temp]=ans
            count++
        }

    }
    return count
}
let arr=[2,8,5,4]
console.log(minSwap(arr))