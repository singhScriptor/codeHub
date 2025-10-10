class Member{
    constructor(name,age,ph_no,address,salary){
        this.name=name
        this.age=age
        this.phNo=ph_no
        this.address=address
        this.salary=salary
    }
    printSalary(){
        console.log(`Salary : ${this.salary}`)
    }
}
class Employee extends Member{
    constructor(name,age,ph_no,address,salary,specialization){
        super(name,age,ph_no,address,salary)
        this.specialization=specialization
    }
    printDetails(){
        console.log(`Name: ${this.name}  specialization: ${this.specialization}`)
        super.printSalary()
    }
}
class Manager extends Member{
    constructor(name,age,ph_no,address,salary,department){
        super(name,age,ph_no,address,salary)
        this.department=department
    }
    printDetails(){
        console.log(`Name: ${this.name}  Department: ${this.department}`)
        super.printSalary()
    }
}
let e=new Employee('Arun',12,3445566,'west coast sea view',456677,'Developer')
e.printDetails()
let m=new Manager('Manish',32,9803849,'Goa',987894,'CEO')
m.printDetails()