class count_objects{
    static count=0
    constructor(name){
        this.name=name
        count_objects.count+=1
    }
    printAttributes(){
        console.log(this.name)
        console.log(count_objects)
    }
}
let ob1=count_objects('Ram')
console.log

 