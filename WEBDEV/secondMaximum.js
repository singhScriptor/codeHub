function secondMaximum(arr){
    let maxi=-Infinity,secondMaxi=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i] > maxi){
            secondMaxi=maxi
            maxi=arr[i]
        }
    }
    return secondMaxi
}
let arr=[1,2,3,1,5,6]
console.log(secondMaximum(arr))