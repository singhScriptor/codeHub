let seriesExcept5Multiples=(n)=>{
    let i=1
    while(i<=n){
        if(i % 5 === 0){
            i++
            continue
        }
        else{
            console.log(i)
            i++
        }
    }    
}
seriesExcept5Multiples(7)