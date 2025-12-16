// //let count=0
// const name = (arr)=>{
//     // for(let i=0;i<arr.length;i++){
//     //     console.log("hello",arr[i])
//     // }
//     let count=0
//     return ()=>{
//         console.log('Hello',arr[count])
//         count++
//     }
// }
// let fun = name(["Ram","Shyam"]);

// fun()// Print Hello Ram

// // fun()//print Hello Shyam

a()
b()
function a(){
    console.log('inside a')
}


function b(){
    console.log('inside b')
}
//b()

let abc=function(){
    return ()=>{
        return "hello"
    }
}
console.log(abc()())

// function jcb(a){
//     return (b)=>{
//         return a+b
//     }
// }
// console.log(jcb(12)(38))

function fun1(){

console.log('a')

return () => {

console.log('b')

}}




fun1()