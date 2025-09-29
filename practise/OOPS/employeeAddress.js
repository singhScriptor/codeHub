class Employee{
    constructor(name,year_of_joining,address){
        this.name=name
        this.yoj=year_of_joining
        this.address=address
    }
    print_details(){
        console.log(`${this.name}  ${this.yoj}   ${this.address}`)
    }
}
let e=new Employee("Robert",1994,"64C-WallsStreet")
e.print_details()