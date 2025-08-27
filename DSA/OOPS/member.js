class Member{
    constructor(name,age,phone_number,address,salary){
        this.name=name
        this.age=age
        this.phone_number=phone_number
        this.address=address
        this.salary=salary

    }
    printSalary(){
        console.log(`Salary: ${this.salary}`)
    }
}
class Employee extends Member{
    constructor(name,age,phone_number,address,salary,specialization){
        super(name,age,phone_number,address,salary)
        this.specialization=specialization
    }
    print_details(){
        console.log(`Name : ${this.name}  Specialization: ${this.specialization}`)
        super.printSalary()
    }
}

class Manager extends Member{
    constructor(name,age,phone_number,address,salary,department){
        super(name,age,phone_number,address,salary)
        this.department=department
    }
    print_details(){
        console.log(` Name: ${this.name}  Departemnt: ${this.department}`)
        super.printSalary()
    }
}
let E=new Employee("Rahul",25,93030,'old street pune',35000,'Intern')
E.print_details()

let M=new Manager('Ganesh',42,576900,'kailasha','Infinit','God')
M.print_details()