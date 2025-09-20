let largestAmongThree=(a,b,c)=>{
    return (a>b && a>c) ? a :
    (b>a && b>c) ? b : c 
}
console.log(largestAmongThree(3,5,1))