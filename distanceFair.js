function distanceFair(distance){
    if(distance >= 1000){
        return 12
    }
    else if(distance > 500 && distance < 1000){
        return 10
    }
    else if(distance > 100 && distance <= 500){
        return 8
    }
    else{
        return 5
    }
}
console.log(distanceFair(750)) // 10

