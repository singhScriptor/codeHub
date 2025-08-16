class Employee{
    constructor (name,yoj,address){
        this.name=name
        this.yoj=yoj
        this.address=address
    }
    print_details(){
        console.log (this.name + " " + this.yoj + " " + this.address)
        console.log(`${this.name}  ${this.yoj}  ${this.address}`)
    }
}
let e1=new Employee("Robert",1994, "64C-WallsStreet")
e1.print_details()

