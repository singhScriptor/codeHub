function validParethesis(s){
    while(s.length){
        let temp=s 
        s=s.replace('{}','')
        s=s.replace('[]','')
        s=s.replace('()','')
        if(temp === s){
            return false
        }
    }
    return true
}
let s='{}'
console.log(validParethesis(s))