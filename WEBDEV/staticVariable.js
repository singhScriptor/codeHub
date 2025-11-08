class User{
    static count=0
    constructor(name,age,qualification){
        this.name=name
        this.age=age
        this.qualification=qualification
        User.count++
    }
    printNumberOfUsers(){
        console.log(`Current total number of users = ${User.count}`)
    }
    printDetails(){
        console.log(` Name : ${this.name}, Age : ${this.age}, Qualification : ${this.qualification}`)
    }
}

let name=prompt("Enter Your Name")
let age=parseInt(prompt("Enter your Age"))
let qualification=prompt("Enter your qualification")

let u=new User(name,age,qualification)
u.printNumberOfUsers()
u.printDetails()

