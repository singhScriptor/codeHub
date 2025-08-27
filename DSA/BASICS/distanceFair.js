function findDistanceCost(distance){
    if(distance >= 1000){
        return 12
    }
    else if(distance > 500){
        return 10
    }
    else if(distance > 100){
        return 8

    }
    else{
        return 5
    }
}
console.log(findDistanceCost(700)) // Output:10


// using ternary operator
function findDistanceCostTernary(distance){
    return (distance >= 1000) ? 12 : (distance > 500) ? 10 : (distance > 100) ? 8 : 5;
}
console.log(findDistanceCostTernary(700)) // Output: 10


//switch case method
function findDistanceCostSwitch(d){
    switch(true){
        case (d >= 1000):
            return 12;
        case (d > 500):
            return 10;
        case (d > 100):
            return 8;
        case (d > 0):
            return 5;
        default:
            return "distance should be positive";
    }            
}
console.log(findDistanceCostSwitch(700)) // Output: 10