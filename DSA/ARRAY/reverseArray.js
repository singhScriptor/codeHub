// function reverseArray(arr){
//     let ans=[]
//     for(let i=arr.length-1;i>=0;i--){
//         ans.push(arr[i])
//     }
//     return ans
// }
// let arr=[1,4,3,2,6,5]
// console.log(reverseArray(arr))

// second and best method
function revArray(arr){
    let left=0,right=arr.length-1
    while(left < right){
        let ans=arr[left]
        arr[left]=arr[right]
        arr[right]=ans
        left++
        right--
    }
    return arr
}
let array=[1,4,3,2,6,5]
console.log(revArray(array))