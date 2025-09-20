function permutation(str){
    if(str.length <= 1) return [str]
    let perms=[]
    for(let i=0;i<str.length;i++){
        let char=str[i]
        let res=str.slice(0,i)+str.slice(i+1)
        for(let j of permutation(res)){
            perms.push(char+j)
        }
    }
    return perms
}
let str='abc'
console.log(permutation(str))