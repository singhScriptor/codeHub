class Employee{
    constructor(name,salary){
        this.name=name
        this.salary=salary
    }
}
let emp=[new Employee('Babu_Rao',150),
    new Employee("Raju", 160),
    new Employee("Raju",160),
    new Employee("Shyam",140),
    new Employee("Pappu",200)
]
function sortEmp(emp){
    for(let i=0;i<emp.length;i++){
        let temp=emp[i]
        let j=i-1 
        while(j>=0 && emp[j].salary > temp.salary){
            emp [j+1]=emp [j]
            j-- 
        }
        emp[j+1]=temp 
    }
    return emp
}
sortEmp(emp)
for (let i of emp){
    console.log(`Name = ${i.name}, Salary: ${i.salary}`)
}
