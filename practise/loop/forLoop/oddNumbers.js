let oddNumbers=(n)=>{
    for(let i=1;i<=n;i++){
        (i%2 !== 0) ? console.log(i) : 'invalid'
    }
}
let n=7
oddNumbers(n)