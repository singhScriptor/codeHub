var printObject={
    age: 26,
    firstName: "Yash",
    lastName: "Prasad",
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main street',
        city: 'BLR',
        state: 'Karnataka'
    }
}
let {firstName,address:{city,state},hobbies}=printObject
console.log(city)
console.log(state)

console.log(hobbies[1])