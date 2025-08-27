function luckyInteger(arr){
    let set=new Set(arr),maxi=-1
    for(let num of set){
        let lucky=arr.filter(sh=>sh===num).length
        if(lucky === num){
            maxi=Math.max(maxi,num)
        }
    }
    return maxi
}
let arr=[2,2,3,4]
console.log(luckyInteger(arr))
