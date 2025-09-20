let pattern1=function(n){
    for(let i=1;i<=n;i++){
        let str=''
        for(let j =0;j<=n-i;j++){
            str+='*'
        }
        console.log(str)
    }
}
let n=5
pattern1(n)