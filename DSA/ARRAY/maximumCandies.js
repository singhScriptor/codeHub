let numberOFCandies=function(candies,extraCandies){
    let maxi=0
    for(let i=0;i<candies.length;i++){
        if(candies[i] > maxi){
            maxi=candies[i]
        }
    }
    let arr=[]
    for(let i=0;i<candies.length;i++){
        arr.push(candies[i]+extraCandies>= maxi)
    }
    return arr
}
let candies = [2,3,5,1,3], extraCandies = 3
console.log(numberOFCandies(candies,extraCandies))