function jewelsStone(jew,sto){
    let count=0
    for(let i=0;i<jew.length;i++){
        for(let j=0;j<sto.length;j++){
            if(jew[i] === sto[j]){
                count++
            }
        }
    }
    return count
}
let jew="aA",sto="aAAbbbb"
console.log(jewelsStone(jew,sto))