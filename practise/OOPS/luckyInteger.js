let lucky=function(arr){
    let set=new Set(arr),maxi=-1
    for(let i of set){
        let lucky=arr.filter(sh=> sh===i).length
        if(lucky === i){
            maxi=Math.max(maxi,i)
        }
    }
    return maxi
}
let arr=[2,3,2,4]
console.log(lucky(arr))







let luckyInt=function(arr){
    let set=new Set(arr),maxi=-1
    for(let i of set){
        let total=arr.filter(sh=>sh===i).length 
        if(total === i){
            maxi=Math.max(maxi,i)
        }
    }
    return maxi
}
let jrr=[3,3,3,2,1,5]
console.log(luckyInt(jrr))