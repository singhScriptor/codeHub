function divideTwoInt(dividend,divisor){
    let div=Math.floor(dividend/divisor)
    if(div > 2147483648){
        return 2147483647
    }
    else if(div < -2147483648){
        return -2147483648
    }
    else{
        return div
    }
}
let dividend=10,divisor=3
console.log(divideTwoInt(dividend,divisor))