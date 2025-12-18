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

function hex(nums){
    if(nums===0)return '0'
    if(nums < 0) nums+=0xffffffff+1
    return nums.toString(16)

}
let n=-1
console.log(hex(n))
