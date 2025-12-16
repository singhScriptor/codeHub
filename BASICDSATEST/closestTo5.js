let sortArray=function(arr){
    return arr.sort((a,b)=>{
        let A=Math.abs(a-5)
        let B=Math.abs(b-5)
        return A-B || a-b
    })
}
let arr=[1,3,5,7,8]
console.log(sortArray(arr))