let pattern3=function(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j =0;j<n-i;j++){
            str+='*'
        }
        console.log(str)
    }
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<=i;j++){
            str+='*'
        }
        console.log(str)
    }
}
pattern3(5)
