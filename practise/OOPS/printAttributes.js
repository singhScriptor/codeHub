class Student{
    constructor(name,roll_no){
        this.name=name
        this.roll_no=roll_no
    }
    display(){
        console.log(`${this.name}  ${this.roll_no}`)
    }
}
let s=new Student('Raj',6758)
s.display()