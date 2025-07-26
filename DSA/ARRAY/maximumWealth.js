function maxiWealth(accounts){
    let maxi=0
    for(let i=0;i<accounts.length;i++){
        let total=accounts[i].reduce((a,b)=>a+b,0)
        maxi=Math.max(maxi,total)
    }
    return maxi
}
let accounts = [[1,2,3],[3,2,1]]
console.log(maxiWealth(accounts))

//2nd method

function maximum_wealth(acnt){
    let maxi=0
    for(let i=0;i<acnt.length;i++){
        let sum=0
        for(let j=0;j<acnt[i].length;j++){
            sum+=acnt[i][j]
        }
        if(sum > maxi){
            maxi=sum
        }
    }
    return maxi
}

let acnt = [[1,2,3],[3,2,1]]
console.log(maximum_wealth(acnt))