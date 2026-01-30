let secondMaximum=function(arr){
    let maxi=-Infinity,secondMaximum=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i] > maxi){
            secondMaximum=maxi
            maxi=arr[i]
        }
    }
    return secondMaximum
}
let arr=[1,2,4,1,5,6]
console.log(secondMaximum(arr))