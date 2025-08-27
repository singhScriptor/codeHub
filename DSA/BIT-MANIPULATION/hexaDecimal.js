function hexaDecimals(num){
    if(num === 0) return '0'
    if(num < 0) num=num >>> 0
    let m='0123456789abcdef'
    let ans=''
    for(let i=1;i<=8;i++){
        ans=m[num%16]+ans
        num=Math.floor(num/16)
    }
    return ans.replace(/^0+/,'')
}
let num=-1
console.log(hexaDecimals(num))
