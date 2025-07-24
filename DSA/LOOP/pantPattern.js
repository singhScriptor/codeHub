function print_Pattern(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<i;j++){
            str+='*'
        }
        for(let k=0;k<n-i-1;k++){
            str+=' '
        }
        for(let l=0;l<i;l++){
            str+='*'
        }
        console.log(str)
    }
}
print_Pattern(5)