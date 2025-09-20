function count(i){
    if(i===6)return 
    else{
        console.log(i)
        count(i+1)
        console.log(i)
    }
}
count(1)