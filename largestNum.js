function findLargestNumber(a,b){
    if(a > b ){
        return a
    }
    else{
        return b
    }
}
console.log(findLargestNumber(23,25)) // 25


function largestOfTHree(a,b,c){
    if( a > b && a > c){
        return a
    }
    else if(b > a && b > c){
        return b
    }
    else{
        return c
    }
}
console.log(largestOfTHree(10,20,30)) // 30


// using ternary operator
function largestOfTwo(a,b){
    return (a > b ) ? a : b
}
console.log(largestOfTwo(15,5)) // 15

function largestOfTHreeNumber(a,b,c){
    return ( a > b && a > c) ? a : (b>a && b> c) ? b : c
}
console.log(largestOfTHreeNumber(12,18,6)) // 18