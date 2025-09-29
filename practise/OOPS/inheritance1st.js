class Shape{
    printShape(){
        console.log("This is shape")
    }
}
class Rectangle extends Shape{
    print(){
        console.log("This is rectangle")
    }
}
class Circle extends Rectangle{
    print(){
        console.log("This is circle")
    }
}
class Square extends Rectangle{
    printSquare(){
        console.log("Square is rectangle")
    }
}
let s=new Square()
s.printSquare()
s.print()
s.printShape()

let v=new Circle()
v.print()
v.printShape()
