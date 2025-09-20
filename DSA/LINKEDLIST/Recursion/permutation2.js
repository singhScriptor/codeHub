let permutation=(str)=>{
    if(str.length <= 1)return [str]
    let perm=[]
    for(let i=0;i<str.length;i++){
        let char=str[i]
        let ans=str.slice(0,i)+str.slice(i+1)
        for(let j of permutation(ans)){
            perm.push(char+j)
        }
    }
    return perm
}
let str='abc'
console.log(permutation(str))