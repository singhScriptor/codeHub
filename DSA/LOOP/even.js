function findEvenNumber(num){
    for(let i=1;i<=num; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}
findEvenNumber(10)


// while loop 
function evenNumber(n){
    let i=1
    while(i<=n){
        if(i% 2 === 0){
            console.log(i)
        }
        i++
    }
}
evenNumber(10)