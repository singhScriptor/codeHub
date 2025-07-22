function findLargest(a,b){
    if(a > b){
        return a 
    }
    else{
        return b
    }
}
console.log(findLargest(10,20)); // Output: 20


// ternary operator method
function findLargestTernary(a,b){
    return (a > b) ? a : b;
}
console.log(findLargestTernary(30,15)); // Output: 30


function findLargestInThree(a,b,c){
    if(a > b && a > c){
        return a
    }
    else if(b > a && b > c){
        return b
    }
    else{
        return c
    }
}
console.log(findLargestInThree(5,10,15)); // Output: 15

// ternary operator method for three numbers
function findLargestInThreeTernary(a,b,c){
    return (a > b && a > c) ? a : (b > a && b > c) ? b : c;
}
console.log(findLargestInThreeTernary(25,30,20)); // Output: 30
