let palindrome=function(word){
    word=word.toLowerCase().replace(/[^a-z0-9]/g,'')
    for(let i=0;i<word.length/2;i++){
        if(word[i] !== word[word.length-1-i])return false
    }
    return true
}
let word="sharpener"
console.log(palindrome(word))