class Student{
    constructor(firstName,lastName,rollNumber,age){
        this.fname=firstName
        this.lname=lastName
        this.rnumber=rollNumber
        this.age=age
    }
    printFullName(){
        console.log(`${this.fname} ${this.lname}`)
    }
    minorMajor(){
        if(this.age >= 18)console.log("major")
        else console.log("minor")    
    }
}
// let students=[
//     new Student("Yash","Prasad",12,27),
//     new Student("Ram","Prasad",14,15)
// ]
// students.forEach((e)=>{
//     e.printFullName()
//     e.minorMajor()
// })

let s1=new Student("Yash","Prasad",12,27)
let s2=new Student("Ram","Prasad",14,15)
s1.printFullName()
s1.minorMajor()

s2.printFullName()
s2.minorMajor()