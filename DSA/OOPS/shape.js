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
class Circle extends Shape{
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
s.print()
s.printSquare()

let sh=new Shape()
sh.printShape()

let re=new Rectangle()
re.printShape()
re.print()

let c=new Circle()
c.print()
c.printShape()

