let maximumWealth=(accounts)=>{
    let maxi=0
    for(let i of accounts){
        let total=i.reduce((a,b)=>a+b,0)
        maxi=Math.max(maxi,total)
    }
    return maxi
}
let accounts = [[1,2,3],[3,2,1]]
console.log(maximumWealth(accounts))