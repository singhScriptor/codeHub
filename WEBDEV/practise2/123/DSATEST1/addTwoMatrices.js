function addTwoMatrices(arr1,arr2){
    let sum=[]
    for(let i=0;i<arr1.length;i++){
        sum[i]=[]
        for(let j=0;j<arr1[0].length;j++){
            sum[i].push(arr1[i][j]+arr2[i][j])
        }
    }
    return sum

}
let MT1 =

[[1,2,5],

[3,5,5]]




MT2 =

[[1,5,7],

[2,1,3]]
console.log(addTwoMatrices(MT1,MT2))