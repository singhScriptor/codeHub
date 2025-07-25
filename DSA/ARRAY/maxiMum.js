function findMaxiMum(arr){
    let maxi=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i] > maxi){
            maxi=arr[i]
        }
    }
    return maxi
}
let arr=[5,1,3,4,2]
console.log(findMaxiMum(arr))