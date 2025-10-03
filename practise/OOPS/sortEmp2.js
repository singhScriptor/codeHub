class Employee{
    constructor(name,salary){
        this.name=name
        this.salary=salary
    }
}
let emp=[
    new Employee("Babu_Rao",160),
    new Employee("Raju",170),
    new Employee('Shyam',140),
    new Employee("Pappu",200)
]
let sortEmployee=function(emp){
    for(let i=0;i<emp.length;i++){
        let j=i-1 ,temp=emp[i]
        while(j>=0 && emp[j].salary>temp.salary){
            emp[j+1]=emp[j]
            j--

        }
        emp[j+1]=temp
    }
    return emp

}
sortEmployee(emp)
for(let i of emp){
    console.log(`${i.name}   ${i.salary}`)
}