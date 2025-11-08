class User{
    static count=0
    constructor(userName,emailId,Password){
        this.username=userName
        this.email=emailId
        this.password=Password
        User.count++
    }
    totalUserCount(){
        console.log(`total user count ${User.count}`)
    }
}
class Member extends User{
    constructor(userName,emailId,Password){
        super(userName,emailId,Password)
        this.validMembership=new Date(2025,10,23)
        this.package="MEMBERSHIPPACKAGENAME"
    }
    purchaseMembership(packageName){
        this.package=packageName
        let newDate=new Date(this.validMembership)
        if(this.package === "MONTHLYPACKAGE"){
            newDate.setMonth(newDate.getMonth()+1)
        }
        else if(this.package === "YEARLYPACKAGE"){
            newDate.setFullYear(newDate.getFullYear()+1)
        }
        this.validMembership=newDate
    }
}
let m=new Member("JohnCena",'imjohn@gmail.com','secureCena')
m.purchaseMembership("MONTHLYPACKAGE")
console.log(m.validMembership)

let m1=new Member("HHH",'stephny@gmail.com','stephintoyou')
m1.purchaseMembership("YEARLYPACKAGE")
console.log(m1.validMembership)