class Member{
    constructor(Name,Age,PhoneNumber,Address,Salary){
        this.name=Name
        this.age=Age
        this.pN=PhoneNumber
        this.address=Address
        this.salary=Salary
    }
    printSalary(){
        console.log(`Salary :${this.salary}`)
    }
}
class Employee extends Member{
    constructor(Name,Age,PhoneNumber,Address,Salary,specialization){
        super(Name,Age,PhoneNumber,Address,Salary)
        this.specialization=specialization
    }
    print_details(){
        console.log(`Name :${this.name}  Specialization :${this.specialization}`)
        super.printSalary()
    }
}
class Manager extends Member{
    constructor(Name,Age,PhoneNumber,Address,Salary,department){
        super(Name,Age,PhoneNumber,Address,Salary)
        this.department=department
    }
    print_details(){
        console.log(`Name :${this.name}  Department :${this.department}`)
        super.printSalary()
    }
}

let e=new Employee('Ganesh','infinte',143,'Kailash Parvat',"Can't affoard","Knowledge")
e.print_details()

let m=new Manager('SHIVA',"Infinite",143,"Kailash Parvat","Can't afford",'Destroyer')
m.print_details()

