function findResult(marks){
    switch(true){
        case (marks >= 40):
            return "pass";
        default:
            return "fail";    
    }
}
console.log(findResult(45)); // Output: pass