var jewelsStone=(jewels,stone)=>{
    let count=0
    for(let i=0;i<jewels.length;i++){
        for(let j=0;j<stone.length;j++){
            if(jewels[i]=== stone[j]){
                count++
            }
        }
    }
    return count
}
let jewels='aA',stones='aAAbbbb'
console.log(jewelsStone(jewels,stones)) 