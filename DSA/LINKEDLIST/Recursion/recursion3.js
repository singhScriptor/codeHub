function count(i){
    if(i===6)return 
    else{
        count(i+1)
        console.log(i)
        //count(i+1)
    }
}
count(1)