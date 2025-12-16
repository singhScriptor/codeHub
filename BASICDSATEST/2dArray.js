function twoDArray(arr1,arr2){
    let rows=arr1.length
    let column=arr1[0].length
    let ans=[]
    for(let i=0;i<rows;i++){
        ans[i]=[]
        for(let j=0;j<column;j++){
            ans[i][j]=arr1[i][j]+arr2[i][j]
        }
    }
    return ans
}
let arr1=[[1,2,5],[3,5,5]]
let arr2=[[1,5,7],[2,1,3]]
console.log(twoDArray(arr1,arr2))