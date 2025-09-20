let BreakInLoop= (n,m)=>{
    for(let i=1;i<=n;i++){
        if(i===m)break
        console.log(i)
    }
}
BreakInLoop(10,4)