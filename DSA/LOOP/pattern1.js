// function printPattern(n){
//     for(let i=0;i<n;i++){
//         let str=''
//         for(let j=0;j<n-i;j++){
//             str+='*'
//         }
//         console.log(str)
//     }
// }
// printPattern(5)


// while loop

function print_Pattern(m){
    let i=0
    while(i <= m){
        let str=''
        let j=0
        while(j<=m-1-i){
            str+='*'
            j++
        }
        i++
        console.log(str)
    }
}
print_Pattern(5)