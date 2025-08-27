class Triangle{
    constructor(side1,side2,side3){
        this.side1=side1
        this.side2=side2
        this.side3=side3
    }
    calculate_area(){
        let area=this.side1*this.side2*this.side3
        console.log(area)
    }
    calculate_perimeter(){
        let perimeter=this.side1+this.side2+this.side3
        console.log(perimeter)
    }
}
let t1=new Triangle(12,2,2)
t1.calculate_area()
t1.calculate_perimeter()