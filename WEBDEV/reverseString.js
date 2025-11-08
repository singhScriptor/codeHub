let reverseString=function(str){
    return str.split('').reverse().join('')
}
let str="mar"
console.log(reverseString(str))


//2nd method

let revStr=function(s){
    let rev=''
    for(let i=s.length-1;i>=0;i--){
        rev+=s[i]
    }
    return rev
}
let s="mango"
console.log(revStr(s))