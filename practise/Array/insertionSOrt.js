let insertionSOrt=(arr)=>{
    for(let i=0;i<arr.length;i++){
        let j=i-1 ,temp=arr[i]
        while(j>=0 && arr[j] > temp){
            arr[j+1]=arr[j]
            j-- 
        }
        arr[j+1]=temp
    }
    return arr
}
let arr=[5,2,3,1,4]
console.log(insertionSOrt(arr))