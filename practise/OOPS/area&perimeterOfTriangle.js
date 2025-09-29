class Triangle{
    constructor(side1,side2,side3){
        this.s1=side1
        this.s2=side2
        this.s3=side3
    }
    calculateArea(){
        return this.s1*this.s2*this.s3 
    }
    calculatePerimeter(){
        return this.s1+this.s2+this.s3 
    }
}
let t1=new Triangle(2,3,4)
console.log(t1.calculateArea())
console.log(t1.calculatePerimeter())