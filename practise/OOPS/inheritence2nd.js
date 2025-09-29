class PARENT{
    print(){
        console.log("this is a parent class")
    }
}
class CHILD extends PARENT{
    print(){
        console.log("this is a child class")
        super.print()
    }
}
let p=new PARENT()
p.print()
let c=new CHILD()
c.print()
