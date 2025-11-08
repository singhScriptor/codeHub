 function nonRepeatCHar(A){
    let freq=new Array(26).fill(0)
    let res='',queue=[]
    for(let i of A){
        let index=i.charCodeAt(0)-'a'.charCodeAt(0)
        freq[index]++
        queue.push(i)
        while(queue.length && freq[queue[0].charCodeAt(0)-'a'.charCodeAt(0)]>1){
            queue.shift(0)
        }
        if(queue.length){
            res+=queue[0]
        }
        else{
            res+='#'
        }
    }
    return res
}
let A="abadbc"
console.log(nonRepeatCHar(A))
