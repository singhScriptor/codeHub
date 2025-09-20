function count(i){
    if(i===5)return 0
    return i+count(i+3)
}
console.log(count(1))