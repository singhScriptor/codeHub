class Student{
    constructor(firstname,lastname,rollNumber,age){
        this.firstname=firstname
        this.lastname=lastname
        this.rollNumber=rollNumber
        this.age=age
    }
    printFullName(){
        console.log(`${this.firstname} ${this.lastname}`)
    }
    minorOrmajor(){
        if(this.age >= 18){
            console.log("Major")
        }
        else{
            console.log("Minor")
        }
    }
}
let s1=new Student("Yash","Prasad",12,27)
s1.printFullName()
s1.minorOrmajor()