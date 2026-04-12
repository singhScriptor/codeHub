function rowWithMax(arr){
    let maxi=0,row=0
    for(let i=0;i<arr.length;i++){
        let count=0
        for(let j=0;j<arr[0].length;j++){
            count+=arr[i][j]
        }
        if( count > maxi){
            maxi=count
            row=i
        }
    }
    return row

}
let arr=[[0,1,1,1], [0,0,1,1], [1,1,1,1], [0,0,0,0]]
console.log(rowWithMax(arr))

//2nd method
function rowWithMaxOnes(arr){
    let left=arr.length,right=arr[0].length
    let row=0,j=right-1
    for(let i=0;i<left;i++){
        while(j >= 0 && arr[i][j] === 1){
            row=i 
            j-- 
        }
    }
    return row
}
let array= [[0,1,1,1], [0,0,1,1], [1,1,1,1], [0,0,0,0]]
console.log(rowWithMaxOnes(array))