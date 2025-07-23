// using switch case method

function findResult(marks){
    switch(true){
        case (marks >= 40):
            return "pass";
        default:
            return "fail";    
    }
}
console.log(findResult(45)); // Output: pass


// using ternary operator
function findResultTernary(marks){
    return (marks >= 40) ? "pass" : 'fail';
}
console.log(findResultTernary(45)) // Output: fail


// using if-else method
function result(marks){
    if(marks >= 40){
        return "pass";
    }
    else{
        return "fail";
    }
}    
console.log(result(40)) // Output: Pass
