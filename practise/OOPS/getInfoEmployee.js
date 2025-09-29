class Employee{
    getInfo(salary,working_hours){
        this.sal=salary
        this.wh=working_hours
    }
    AddSal(){
        if(this.sal < 500){
            this.sal+=10
        }
    }
    AddWork(){
        if(this.wh > 6){
            this.sal+=5 
        }
    }
}
let e=new Employee()
e.getInfo(350,7)
e.AddSal()
e.AddWork()
console.log(e.sal)
