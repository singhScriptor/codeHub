let patternWhile=function(n){
    let i=1
    while(i<=n){
        let j=1 
        let str=''
        while(j <= n-i+1){
            str+='*'
            j++
        }
        i++
        console.log(str)
    }
}
let n=5
patternWhile(n)