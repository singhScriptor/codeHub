let maxiInArray=(arr)=>{
    return Math.max(...arr)
}
let arr=[5,4,7,2,6]
console.log(maxiInArray(arr))

//
let maxArray=function(jrr){
    let maxi=jrr[0]
    for(let i=0; i<jrr.length;i++){
        if(jrr[i] > maxi){
            maxi=jrr[i]
        }
    }
    return maxi
}
let jrr=[5,7,2,3,1]
console.log(maxArray(jrr))



