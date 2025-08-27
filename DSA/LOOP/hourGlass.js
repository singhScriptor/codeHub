function hour_Glass(n){
    for(let i=0;i<n;i++){
        let str=''
        for(let j=0;j<n-i;j++){
            str+='*'
        }
        console.log(str)
    }
    for(let k=1;k<=n;k++){
        let str=''
        for(let l=0;l<k;l++){
            str+='*'
        }
        console.log(str)
    }
}
hour_Glass(5)

// while loop 
function hourGlass(n){
    let i=0
    while(i <n){
        let str=''
        let j=0
        while(j<n-i){
            str+='*'
            j++
        }
        i++
        console.log(str)

    }
    let k=1
    while(k<=n){
        let str=''
        let l=0
        while(l < k){
            str+='*'
            l++
        }
        k++
        console.log(str)

    }
}
hourGlass(5)