let studentObj={
    "yash":26,
    "vaibhav":24,
    "rajesh":25
}
function averageAge(obj){
    let sum=0,count=0
    for(let i in obj){
        sum+=obj[i]
        count++
    }
    let average=sum/count
    return average
}
console.log(averageAge(studentObj))