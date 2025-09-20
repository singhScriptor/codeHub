let multiple=(n)=>{
    let count=(i)=>{
        if(i > n)return 
        console.log(i)
        count(i+5)
    }
    count(0)
}
multiple(50)