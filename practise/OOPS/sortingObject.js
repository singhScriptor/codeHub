class Employee{
    constructor(Name,Salary){
        this.name=Name
        this.salary=Salary
    }
}
let emp=[new Employee('Babu_Rao',150),
    new Employee("Raju",160),
    new Employee("Shyam",140),
    new Employee("Pappu",200)
]

let sortEmployee=function(emp){
    for(let i=0;i<emp.length;i++){
        let temp=i 
        for(let j=i;j<emp.length;j++){
            if(emp[j].salary < emp[temp].salary){
                temp=j 
            }
        }
        [emp[i],emp[temp]]=[emp[temp],emp[i]]


    }
    return emp
}
function main(){
    sortEmployee(emp)
    for(let i of emp){
        console.log(`${i.name}  ${i.salary}`)
    }
}
main()