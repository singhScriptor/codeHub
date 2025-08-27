function sortBits(arr){
    return arr.sort((a,b)=>{
        let A=a.toString(2).split('').filter(sh=>sh==='1').length;
        let B=b.toString(2).split('').filter(sh=> sh==='1').length;
        return A-B | a-b
    })

}
let arr = [0,1,2,3,4,5,6,7,8]
console.log(sortBits(arr))


// 2nd method

function sortedBits(nums){
    return arr.sort((a,b)=>{
        let A=a.toString(2).split('').filter(sh=>sh === '1').length;
        let B=b.toString(2).split('').filter(sh=>sh==='1')
        return A-B | a-b
    })
}
let ar=[0,1,2,3,4,5,6,7,8,9]
console.log(sortBits(ar))



//sortBits

function sortBits(arr){
    return arr.sort((a,b)=>{
        let A=a.toString(2).split('').filter(lh=> lh==='1').length 
        let B=b.toString(2).split('').filter(lh=> lh==='1').length
        return A-B | a-b 
    })
}
let rr=[0,1,2,3,4,5,6,7,8]
console.log(sortBits(rr))
