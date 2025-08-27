function armStrong(n){
    let temp=n
    let sum =0
    while(temp > 0){
        let simp= temp % 10
        sum += simp ** 3
        temp= Math.floor(temp / 10)
    }
    return n === sum
}
let n=153
console.log(armStrong(n))


// for loop 

function armStrongs(n){
    sum=0
    for(temp=n;temp > 0 ; temp=Math.floor(temp/10)){
        let simp=temp % 10
        sum += simp ** 3
        temp= Math.floor(temp / 10)
    }
    return n === sum
}
console.log(armStrongs(153))
