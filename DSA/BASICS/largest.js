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

