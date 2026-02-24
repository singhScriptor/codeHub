// console.log(a)//reference error
// console.log(b)//undefined
// let a=5
// var b=6
// console.log(b)// output will be 6


/*
typeError occurs when when you use the wrong type then it will be type error .
exampl=let num=7 num.toLowerCase()
*/

/* 
syntaxError when there is any duplication is syntax error even wrong grammar of js is also syntax error 
example: let a=12 ,let a=14 
example : (if i ===  "name" 
*/

/* reference error when missing the variable or function  or even calling is before decalration 
example: console.log(a) here decalration is missing 
example: console.log(a) let a= 12 again reference error 
*/

// console.log(a)//undefined
// var a=5

// console.log(b)// refence error 

// let a=5
// var b=6
// console.log(this.b)//6
// console.log(window.b)//6
// console.log(window.a)//undefined
// console.log(this.a)//undefined

// let a=5,a=6//syntax error right 

// let a=6
// const b 
// b=100 // will throw syntax error it should be decalre the value at the same time of initialzation


//
/*
clousres,settimeout,ES6Features
*/
//

// function outerFunction(){
//     let a =10
//     function innerFunction(){
//         console.log(a)
//     }
//     return innerFunction
// }
// let ans=outerFunction()
// ans()


// let ans={
//     Name:'Gaurav',
//     address:{
//         vill:'goa',
//         city:'goa',
//         state:'goa'
//     }
// }
// let {address:{city},Name} = ans
// console.log(city)// this is destructing
// // console.log(ans.address.state)

// var arr=[1,2,3,5]
// var newArr=arr.forEach((item,i)=>{
//     console.log(item+i)
// })
// console.log(newArr)

// const a=10
// {
//     const a=20
// {
//     console.log(a)
// }
// console.log(a)
// }
// console.log(a)

// function outerFunction(){
//     let count=0
//     function innerFunction(){
//         count++
//         console.log(count)
//     }
//     return innerFunction
// }
// let ans=outerFunction()
// ans()
// ans()
// ans()

// function outerFunction(){
//     let a=10
//     function innerFunction(){
//         return a
//     }
//     return innerFunction()
// }
// console.log(outerFunction())

// function x(){
//     let a=10
//     function y(){
//         console.log(a)
//     }
//     return y
// }
// console.log(x())

// call examples
// function greetings(greet,name){
//     console.log(greet," ", name , "from", this.place)

// }
// let obj={place:'Patna'}
// greetings.call(obj,"hello",'Dhiraj')

//aplly
// function greet(greeting,name){
//     console.log(greeting," ",name," from ", this.place)
// }
// let obj={place : 'patna'}
// greet.apply(obj,['Hello','DRJ'])

//bind
// function bindGrid(greet,name){
//     console.log(greet," ",name,"from",this.place)
// }
// let object={place:'Goa'}
// let ans=bindGrid.bind(object,'hello','DRJ')
// ans()

// var obj={
//     val:100
// }
// function fun(){
//     console.log(this.val)
// }
// // obj.fun=fun
// obj.fun()

// var obj = {

// val: 100

// }

// function fun(a){
// console.log(this.val + a)

// }

// fun.call(obj,34)

// var obj={
//     val:100
// }
// function fun(a){
//     console.log()
// }

// a()// "hey there"
// b()// type error cause b is not a function 
// function a(){
//     console.log('Hey There')
// }

// var b=function(){
//     console.log('Hey man')
// }
// //b()
// function a(){
//     console.log('inside a')
// }
// var b=function abc(){
//     console.log('inside b')
// }
// a()
// abc()// this will be give reference error 


// function fun(a){
//     console.log(a)
// }
// var b=10
// fun(b)

// function fun1(){

// console.log('a')

// return () => {

// console.log('b')

// }}

// fun1()()

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// console.log(sum(1)(2)(3))

// function fun1(a){
//     const fun2=(b)=>{
//         a=a+b
//         console.log(a)
//     }
// }
// fun1(10)(30)

// class Student{
//     static count=0
//     constructor(name,age,phone,marks){
//         this.name=name
//         this.age=age
//         this.phone=phone
//         this.marks=marks
//     }
//     increaseStudentCount(){
//         Student.count++
//     }
//     printStudentCount(){
//         console.log(Student.count)
//     }
// }


// function x(y){
//     console.log('inside x')
//     y()
// }
// x(function y(){
//     console.log('inside y')
// })

// var fun=a=>a
// var a=10
// console.log(fun(a))

// let name=str=>str
// let str='DRJ'
// console.log(name(str))

// var fun=a=>a
// var a=10
// console.log(fun(a))// output will be 10

// var fun=a=>a
// console.log(fun(a))
// var a=10//undefined

// var fun=a=>{a}
// var a=10
// console.log(fun(a))// undefined

// var fun=(a,b)=>{
//     var sum=a+b
//     return sum
// }
// var a=10,b=20
// console.log(fun(a,b))

// var fun=(a,b)=>
//     var sum=a+b
//     return sum
//     var a=10
//     var b=20

// var student=function(name){
//     this.name=name
//     function print(){
//         console.log(this.name)
//     }
//     print()
// }
// var y=new student('Yash')
// console.log(y)

// var student = function(name){

//   this.name = name;

//   function printName() {

//     console.log(this.name)

//   }

//    printName()

// }

// var yash = new student("yash")


var student=function(name){
    this.name=name
    var printName=()=>{
        console.log(this.name)
    }
    printName()
}
var yash=new student('yash')