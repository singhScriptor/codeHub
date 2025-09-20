let sumofNaturals=(n)=>{
    let sum=(i)=>{
        if(i > n)return 
        console.log(i)
        sum(i+1)
    }
    sum(0)
}
sumofNaturals(5)