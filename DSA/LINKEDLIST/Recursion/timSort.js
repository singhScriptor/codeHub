function insertionSort(arr,left,right){
    for(let i=left+1;i<=right;i++){
        let temp=arr[i]
        let j=i-1
        while(j >= left && arr[j] > temp ){
            arr[j+1]=arr[j]
            j-- 
        }
        arr[j+1]=temp
    }
}
function merge(arr,l,m,r){
    const len1=m-l+1 
    const len2=r-m 
    const left=new Array(len1)
    const right= new Array(len2)
    for(let i=0;i<len1;i++) left[i]=arr[l+i]
    for(let j=0;j<len2;j++) right[j]=arr[m+1+j]
    let i=0,j=0,k=l 
    while(i<len1 && j < len2){
        if(left[i] <= right[j])arr[k++]=left[i++]
        else arr[k++]=right[j++]
    }
    while(i < len1)arr[k++]=left[i++]
    while(j<len2)arr[k++]=right[j++]
}
function timSort(arr){
    const n=arr.length
    const RUN=32
    for(let i=0;i<n;i+=RUN){
        insertionSort(arr,i,Math.min(i+RUN-1,n-1))
    }
    for(let Size=RUN;Size<n;Size=2*Size){
        for(let left =0;left<n;left+=2*Size){
            const mid=Math.min(left+Size-1,n-1)
            const right = Math.min(left + 2 * Size - 1, n - 1);
            if(mid < right )merge (arr,left,mid,right)
        }
    }
    return arr
}
