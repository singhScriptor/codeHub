function maxiWOrds(sentences){
    let maxi=0
    for (let i of sentences){
        i=i.split(' ')
        maxi=Math.max(maxi,i.length)
    }
    return maxi
}
let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(maxiWOrds(sentences))