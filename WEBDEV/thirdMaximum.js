let findThirdMaxi=function(arr){
    let maxi=-Infinity,secondMaxi=-Infinity,thirdMaxi=-Infinity
    for(let i=0;i<arr.length;i++){
        if(arr[i] > maxi){
            thirdMaxi=secondMaxi
            secondMaxi=maxi
            maxi=arr[i]
        }
        else if(arr[i] > secondMaxi && arr[i] < maxi){
            thirdMaxi=secondMaxi
            secondMaxi=arr[i]
        }
        else if(arr[i] > thirdMaxi && arr[i] < secondMaxi){
            thirdMaxi=arr[i]
        }
    }
    return thirdMaxi
}
let arr=[5,7,8,9,3,4]
console.log(findThirdMaxi(arr))