function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let temp=i 
        for(let j=i;j<arr.length;j++){
            if(arr[j] < arr[temp]){
                temp=j
            }
        }
        [arr[i],arr[temp]]=[arr[temp],arr[i]]
    }
    return arr
}
let arr=[5,1,2,4,3]
console.log(selectionSort(arr))