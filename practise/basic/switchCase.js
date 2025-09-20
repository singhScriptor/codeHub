let dayDeclaration=(day)=>{
    let ans;
    switch(day){
        case 1: 
            ans="Monday"
            break
        case 2:
            ans="Tuesday"
            break
        case 3:
            ans="Wednesday"
            break
        case 4:
            ans='Thursday'
            break
        case 5:
            ans="Friday"
            break
        case 6:
            ans='Saturday'
            break
        case 7:
            ans='Sunday'
            break
        default:
            ans="Invalid"                        
    }
    return ans
}
console.log(dayDeclaration(3))