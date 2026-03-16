function mergeSort(arr){
    if(arr.length <=1)return arr
    let mid=Math.floor(arr.length/2)
    let left=mergeSort(arr.slice(0,mid))
    let right=mergeSort(arr.slice(mid))
    return merge(left,right)
}
function merge(left,right){
    let res=[]
    while(left.length && right.length){
        res.push(left[0]<right[0] ? left.shift():right.shift())
    }
    return res.concat(left,right)
}
