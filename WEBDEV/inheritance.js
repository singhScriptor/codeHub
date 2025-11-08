class User{
    static count=0
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
        User.count++
    }
    printUserCount(){
        console.log(` total number of users count : ${User.count}`)
    }
}
class Member extends User{
    constructor(username,email,password){
        super(username,email,password)
        this.validMemberShip= new Date(2025,9,23)
        this.package="membershipPackageName"
    }
    purchaseMembership(membershipPackageName){
        this.package=membershipPackageName
        let newDate=new Date(this.validMemberShip)
        if(this.package === "MONTHLYPACKAGENAME"){
            newDate.setMonth(newDate.getMonth()+1)
        }
        else if(this.package === "YEARLYPACKAGENAME"){
            newDate.setFullYear(newDate.getFullYear()+1)
        }
        this.validMemberShip=newDate
    }
}
let m=new Member('DRJ',"drj@gmail.com","secure123")
m.purchaseMembership("MONTHLYPACKAGENAME")
console.log(m.validMemberShip)

let m1=new Member('TVF','tvf@gmail.com',"werk345")
m1.purchaseMembership("YEARLYPACKAGENAME")
console.log(m1.validMemberShip)