let distanceCost=(d)=>{
    if(d <= 0) return null
    return (d <= 100) ? 5 :
    (d <= 500) ? 8 :
    (d < 1000) ? 10 : 12
}
console.log(distanceCost(700))