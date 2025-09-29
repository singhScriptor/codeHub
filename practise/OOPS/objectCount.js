class count_objects{
    static count=0
    static staticsCount(){
        count_objects.count++
    }
}
count_objects.staticsCount()
console.log(count_objects.count)