function Person(firstName,lastname,gender,age){
    this.firstName=firstName
    this.lastname=lastname
    this.gender=gender
    this.age=age
}
Person.prototype.printFullName=function(){
    console.log(`${this.firstName} ${this.lastname}`)
}
Person.prototype.eligiblity=function(minAge){
    if(this.age > minAge){
        console.log("ELIGIBLE")
    }
    else{
        console.log("NOT ELIGIBLE")
    }
}
let p1=new Person("Yash","Prasad","M",10)
let p2=new Person("Vaibhav","Prasad","M",20)
p1.eligiblity()
p1.printFullName()