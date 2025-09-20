let miniMumInarray=function(arr){
    return Math.min(...arr)
}
let arr=[5,6,2,9,-2]
console.log(miniMumInarray(arr))


let miniArray=function(jrr){
    let mini=arr[0]
    for(let i=0;i<jrr.length;i++){
        if(jrr[i] < mini){
            mini=jrr[i]
        }
    }
    return mini
}
let jrr=[5,6,2,9,-2]
console.log(miniArray(jrr))




