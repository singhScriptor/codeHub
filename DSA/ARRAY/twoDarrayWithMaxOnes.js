function rowWIthMaxOnes(arr){
    let maxi=0,row=0
    for(let i=0;i<arr.length;i++){
        let count=0
        for(let j=0;j<arr[0].length;j++){
            if(arr[i][j] === 1){
                count++
            }
        }
        if(count > maxi){
            row=i
            maxi=count
        }
    }
    return  row
}
let arr=[[0,1,1,1], [0,0,1,1], [1,1,1,1], [0,0,0,0]]
console.log(rowWIthMaxOnes(arr))


// two pointer 
function rowWithMaxones(arr){
    let row=0,column=arr[0].length-1
    while(row < arr.length && column >=0){
        if(arr[row][column] === 1){
            column--
        }
        else{
            row++
        }
    }
    return row
}
let array=[[0,1,1,1], [0,0,1,1], [1,1,1,1], [0,0,0,0]]
console.log(rowWithMaxones(array))