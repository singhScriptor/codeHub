let a=0
for(let i=0;i<N;i++){
    for(let j=N;j>i;j--){
        a=a+i+j
    }
}// here time complexity will be O(N^2)


let i,j,k=0
for(let i=n/2;i<=n;i++){
    for(let j=2;j<=n;j=j*2){
        k=k+n/2
    }
}//here time complexity will be O(N LOG N)




f1(n) = 2^n
f2(n) = n^(3/2)
f3(n) = nLogn
f4(n) = n^(Logn)

// order would be according to time complexity 
f2,f3,f4,f1






