// while loop

function notdivisibleByFive(n){
    let i=1
    while(i <= n){
        if(i % 5 === 0){
            i++
            continue
        }
        else{
            console.log(i)
            i++
        }
    }
}
notdivisibleByFive(7)


// for loop 

function printSeries(num){
    for(let i=1;i<=num;i++){
        if(i% 5 === 0){
            continue
        }
        console.log(i)
    }
}
let num=7
printSeries(num)