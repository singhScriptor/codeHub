let continueLoop=function(n){
    for(let i=1;i<=n;i++){
        if(i%4 === 0)continue
        if(i%2 === 0)console.log(i)
    }
}
continueLoop(10)