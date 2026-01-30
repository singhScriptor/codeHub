class User{
    static count=0
    constructor(){
        User.count++
    }
    printNumberOfUsers(){
        console.log("currentnumberofusers =",User.count)
    }
}
let u1=new User(1)
u1.printNumberOfUsers()