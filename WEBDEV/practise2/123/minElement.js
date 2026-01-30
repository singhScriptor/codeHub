let minimumElement=function(arr){
    let mini=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i] < mini)mini=arr[i]
    }
    return mini
}
let arr=[1,2,4,1,5,6]
console.log(minimumElement(arr))