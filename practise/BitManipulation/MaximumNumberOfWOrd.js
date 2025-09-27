let maximumWordInSentence=(sentences)=>{
    let maxi=0
    for(let i of sentences){
        let count=i.split(' ').length
        if(count > maxi){
            maxi=count
        }
    }
    return maxi
}
let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(maximumWordInSentence(sentences))