let twoMatrices=function(arr1,arr2){
    let ans=[]
    for(let i=0;i<arr1.length;i++){
        ans[i]=[]
        for(let j=0;j<arr1[0].length;j++){
            ans[i][j]=arr1[i][j]+arr2[i][j]
        }
    }
    return ans
}
let MT1 =

[[1,2,5],

[3,5,5]]

MT2 =

[[1,5,7],

[2,1,3]]

console.log(twoMatrices(MT1,MT2))