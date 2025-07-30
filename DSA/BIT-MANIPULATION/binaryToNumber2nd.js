function binaryToNumber(binary){
    let num=0
    for(let i of binary){
        num=num*2+parseInt(i)
    }
    return num
}
let binary='111'
console.log(binaryToNumber(binary))