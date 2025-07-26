function runningSum(arr){
    for(let i=1;i<arr.length;i++){
        arr[i]= arr[i]+arr[i-1]
    }
    return arr
}
let arr=[1,2,3,4]
console.log(runningSum(arr))