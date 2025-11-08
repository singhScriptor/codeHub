function maxElement(arr){
    let maxi=-1
    for(let i=0;i<arr.length;i++){
        if(arr[i] > maxi){
            maxi=arr[i]
        }
    }
    return maxi
}
let arr=[1,2,4,1,5,6]
console.log(maxElement(arr))

let maximumElement=function(jrr){
    let maxi=-Infinity
    for(let i=0;i<jrr.length;i++){
        maxi=Math.max(maxi,jrr[i])
    }
    return maxi
}
let jrr=[1,2,4,1,5,6]
console.log(maximumElement(jrr))