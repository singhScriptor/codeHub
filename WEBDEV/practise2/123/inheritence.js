class User{
    static count=0
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
        User.count++
    }
    printNumberofUsers(){
        console.log("currentnumberofusers =", User.count)
    }
}
class Member extends User{
    constructor(username,email,password) {
        super(username,email,password)
        this.membershipactivetilldate=new Date(2023,2,3)
        this.package='membershippackagename'
    }
    purchaseMembership(membershippackagename){
        this.package=membershippackagename
        if(this.package === "MONTHLYPACKAGE"){
            this.membershipactivetilldate=new Date(2023,3,3)
        }
        else if(this.package === "YEARLYPACKAGE"){
            this.membershipactivetilldate=new Date(2024,2,3)
        }
    }
}