let maxElement=function(arr){
    let maxi=0
    for(let i=0;i<arr.length;i++){
        if(arr[i] > maxi){
            maxi=arr[i]
        }
    }
    return maxi
}
let arr=[1,2,4,1,5,6]
console.log(maxElement(arr))