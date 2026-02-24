class Student{
    constructor(name,age,marks){
        this.name=name
        this.age=age
        this.marks=marks
    }
    setPlacementAge(minAge){
        return (minMarks)=>{
            return this.age >= minAge && this.marks >= minMarks
        }
    }
}
let n=new Student('abhay',24,89)
console.log(n.setPlacementAge(18)(50))