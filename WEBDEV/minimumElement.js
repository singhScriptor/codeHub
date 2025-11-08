let minimumElement=function(arr){
    let mini=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i] < mini){
            mini=arr[i]
        }
    }
    return mini
}
let arr=[1,-2,-3,6,3,7]
console.log(minimumElement(arr))

let miniEle=function(frr){
    let mini=frr[0]
    for(let i=0;i<frr.length;i++){
        mini=Math.min(mini,frr[i])
    }
    return mini
}
let frr=[1,-2,-3,6,3,7]
console.log(miniEle(frr))
