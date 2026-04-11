function maxiMini(arr){
    let maxi=arr[0],mini=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i] > maxi){
            maxi=arr[i]
        }
        else if(arr[i] < mini){
            mini=arr[i]
        }
    }
    return [mini,maxi]
}
let arr=[3,5,4,1,9]
console.log(maxiMini(arr))

// naive approach
function findMaxiMini(arr){
    arr=arr.sort((a,b)=>a-b)
    return [arr[0],arr[arr.length-1]]
}
let frr=[3,5,4,1,9]
console.log(findMaxiMini(frr))




