function count(i){
    if(i>5)return 0
    return i*count(i+1)
}
console.log(count(1))