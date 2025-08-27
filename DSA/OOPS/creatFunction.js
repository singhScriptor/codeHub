class Student{
    constructor(name,roll_no){
        this.name=name
        this.roll_no=roll_no
    }
    printAttributes(){
        console.log(this.name)
        console.log(this.roll_no)
    }
}
let s1=new Student("Rahul",45)
s1.printAttributes()