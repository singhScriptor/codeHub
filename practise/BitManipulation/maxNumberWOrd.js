let MaximumNumberWord=(sentences)=>{
    let maxi=0
    for(let i of sentences){
        let total=i.split(' ').length
        maxi=Math.max(maxi,total)
    }
    return maxi
}
let sentences=["alice and bob love leetcode","i think so too","this is great thanks very much"]
console.log(MaximumNumberWord(sentences))
