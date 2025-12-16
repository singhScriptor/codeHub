let sum2DArray=function(ar1,ar2){
    let rows=ar1.length
    let column=ar1[0].length
    let ans=[]
    for(let i=0;i<rows;i++){
        ans[i]=[]
        for(let j=0;j<column;j++){
            ans[i][j]=ar1[i][j]+ar2[i][j]
        }
    }
    return ans
}
let ar1=[[1,2,5],[3,5,5]]
let ar2=[[1,5,7],[2,1,3]]
console.log(sum2DArray(ar1,ar2))