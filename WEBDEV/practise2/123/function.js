let converTem=function(unit,value){
    if(unit === "K")return value+273
    else if(unit === "C") return value-273
    else return "Invalid"
}
let unit="K",value=35
console.log(converTem(unit,value))