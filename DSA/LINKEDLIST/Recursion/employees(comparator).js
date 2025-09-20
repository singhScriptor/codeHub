class Employee{
    constructor(name,salary){
        this.name=name
        this.salary=salary
    }
    // printAttributes(){
    //     console.log(`${this.name} , ${this.salary}`)
    // }
}
let e1=new Employee('Alice',65000)
let e2=new Employee('Bob',45000)
let e3=new Employee('Jaxx',43000)
let e4=new Employee('Sam',89000)
let e5=new Employee('Matt',71000)

let employees=[e1,e2,e3,e4,e5]
employees.sort((a,b)=>a.salary - b.salary)
//employees.forEach(e=>(e.printAttributes()))

employees.forEach(e=>console.log(e.name))
employees.forEach(e=> console.log(e.name, e.salary))