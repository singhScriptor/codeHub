// console.log('a')//a
// console.log('b')//b 
// setTimeout(()=>console.log('c'),1000)//c
// console.log('d')//d

// // final output will be a,b,d,c 

// console.log('a')
// console.log('b')
// setTimeout(()=>console.log('e'),1000)
// setTimeout(()=>console.log('c'),0)
// console.log('d')

// // final output will be a,b,d,c,e

// const arr=["john","amay","sujay"]
// const cpoy=[...arr]
// console.log(cpoy)

// const user={name: "Rajesh", age:25}
// const update={...user, city:"patna"}
// console.log(update)

// let checkPalindrome=function(name){
//     name=name.toLowerCase().replace(/[^a-z0-9]/g,"")
//     let reverse=[...name].reverse().join('')
//     return name === reverse
// }
// let name="madam"
// console.log(checkPalindrome(name))



// const obj1={
//     "key1":'value1',
//     "key2":'value2',
//     "key3":'value3'
// }
// const obj2={...obj1}
// console.log(obj2)// it will show same as obj1 

// const obj1={
//     "key1":"Value1",
//     "key2":'value2',
//     "key3":'value3'
// }
// const obj2={...obj1,"key3":"new Value"}
// console.log(obj2)

// const obj1={
//     "key1":"Value1",
//     "key2":'value2',
//     "key3":'value3'
// }
// const obj2={...obj1,"key3":"new Value",'key1':"new val"}
// console.log(obj2)


const obj={
    "key1":'value1',
    "key2":'value2',
    'key3':'value3'
}
const obj2={...obj}
console.log(obj === obj2)// false
// cause object value will be copy as it is but object will be save as a new in memory


const arr1=[1,2,3]
const arr2=[3,5,6]
const copy=[...arr1,...arr2]
console.log(copy)