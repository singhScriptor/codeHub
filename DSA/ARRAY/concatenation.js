function concateNation(nums){
    let length=nums.length
    for(let i=0;i<length;i++){
        nums.push(nums[i])
    }
    return nums
}
let nums=[1,2,1]
console.log(concateNation(nums))


// 2nd method

function concatenation2(num){
    let result=[]
    let length=num.length
    for(let i=0;i<length;i++){
        result.push(num[i])
    }
    for(let i=0;i<length;i++){
        result.push(num[i])
    }
    return result
}
let num=[1,2,1]
console.log(concatenation2(num))

//3rd method
function concateNation3(numb){
    let res=[]
    for(let i=0;i<numb.length*2;i++){
        res.push(numb[i%numb.length])
    }
    return res
}
let numb=[1,2,1]
console.log(concateNation3(numb))