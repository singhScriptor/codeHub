let pattern5=function(n){
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
    let k=1
    while(k<=n){
        let l=1
        let str=''
        while(l<k+1){
            str+='*'
            l++ 
        }
        k++
        console.log(str)
    }
}
pattern5(5)