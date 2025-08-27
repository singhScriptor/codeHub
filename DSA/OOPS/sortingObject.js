class Employee{
    constructor(name,salary){
        this.name=name
        this.salary=salary
    }
    printAttributes(){
        console.log(` ${this.name}  ${this.salary}`)
    }
}
let emp=[
    new Employee('Babu_Rao',150),
    new Employee("Raju",160),
    new Employee("Shyam",140),
    new Employee('Pappu',200)
]
function sortEmployee(emp){
    for(let i=0;i<emp.length;i++){
        for(let j=0;j<emp.length-1-i;j++){
            if(emp[j].salary>emp[j+1].salary){
                let temp=emp[j]
                emp[j]=emp[j+1]
                emp[j+1]=temp
            }
        }
    }
    return emp
}
function main(){
    sortEmployee(emp)
    for(let i of emp){
        i.printAttributes()
    }
}
main()