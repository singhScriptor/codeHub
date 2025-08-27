// let a= 5 so bit will be = 0101
// b=3 so bit will be = 0011

/*
a&b=0101 & 0011=0001=1
so output will be 1 cause in bitwise and (&) operator
if both side have 1 then only it will print 1 else it will print zero
*/

let a=5,b=3
let ans=a&b
console.log(ans) // output will be 1

// or operator Bitwise OR(|)

// in or operator atleast one side should have 1 then it will print 1

// even if we got one on both side then also condition is satisfied to get 1 atleast one side so it will work as 1
console.log(a|b)



// XOR operator
// in XOR operator if the both side have equal value then it will print zero
// like if both side have zero it will be zero same with one 
// it should have 1 only  one side  to meet the requirement

//Example:
console.log(a^b)



// Bitwise -NOT (~)

// bitwise NOT operator simply convert zero into one and one into zero
// Bitwise NOT always work in 32-Bits 

console.log(~7)


//  left Shift (<<)

//in left shift you are simply multiplying with 2 for each index movement 

console.log(5 << 1)


// RIght shift (>>)

// in right shift you are simply  dividing by 2 for each step"

console.log(5 >> 1) // output will be 2 

// note the answer will be flooring not in decimals so wheather you get let suppose 2.9 still you will get 2 as a answer"



let n=37
console.log(n.toString(2))

//2nd method
function numTobinary(n){
    let binary=''
    while(n > 0){
        binary=n%2+binary
        n=Math.floor(n/2)
    }
    return binary
}
console.log(numTobinary(37))


function binarytoNum(binary){
    let num=0
    for(let i=0;i<binary.length;i++){
        num=num*2+parseInt(binary[i])
    }
    return num
}
let binary='1011'
console.log(binarytoNum(binary))

console.log(11 >> 2)

console.log(5 >> 1)

console.log(5^2)


function numberToBinary(num){
    let binary=''
    while(num >0){
        binary=num%2+binary
        num=Math.floor(num/2)
    }
    return binary
}
let num=7
console.log(numberToBinary(num))


function binarytoNum(binary){
    let num=0
    for (let i of binary){
        num=num*2+parseInt(i)
    }
    return num
}
let nv='111'
console.log(binarytoNum(nv))


function binaryTONumber(binary){
    let num=0
    for(let i of binary){
        num=num*2+parseInt(i)

    }
    return num
}
let ni='1111'
console.log(binaryTONumber(ni))


function numberTObinary(num){
    let bin=''
    while(num > 0){
        bin=num%2+bin
        num=Math.floor(num/2)
    }
    return bin
}
let nm=15
console.log(numberTObinary(nm))



