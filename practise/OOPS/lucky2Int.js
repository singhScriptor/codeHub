function luckyInteger(arr){
    let set=new Set(arr),maxi=-1
    for(let i of set){
        let lucky=arr.filter(sh=>sh===i).length
        if(lucky === i){
            maxi=Math.max(maxi,i)
        }
    }
    return maxi
}
let arr=[2,2,3,4]
console.log(luckyInteger(arr))