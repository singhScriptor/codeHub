let temperatureConversion=function(tempValue,conversionUnit){
    if(conversionUnit === 'K'){
        return tempValue+273
    }
    else{
        if(conversionUnit === 'C'){
            return 273-tempValue
        }
    }
}
let temp=35,unit='K'
console.log(temperatureConversion(temp,unit))


// using terenary operator

let tempConv=function(temp,unit){
    return unit === "K" ? (temp+273):(temp-273)
}
let t=308,u="C"
console.log(tempConv(t,u))