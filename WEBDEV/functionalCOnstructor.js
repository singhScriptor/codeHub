class Person{
    constructor(first_name,last_name,sex,age){
        this.fName=first_name
        this.lName=last_name
        this.sex=sex
        this.age=age
    }
    printFullName(){
        console.log(`${this.fName} ${this.lName}`)
    }
}
let details=[
    new Person("Yash","Prasad","M",10),
    new Person("Vaibhav","Prasad","M",20)
]
let eligible=function(details){
    for(let i=0;i<details.length;i++){
        if(details[i].age > 18){
            details[i].printFullName()
        }
    }
}
eligible(details)
