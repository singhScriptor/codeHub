function numberToBinary(num){
    let binary=''
    while(num > 0){
        binary+=num%2
        num=Math.floor(num/2)
    }
    return binary.split('').reverse().join('')
}
console.log(numberToBinary(7))

