let person={
    name:'Lalan',
    age:45,
    hobbies:["reading","movies","coding","f1","football"],
    address:{
        city:"patna",
        state:"Bihar",
        country:"India"
    }
}
console.log(person.hobbies[1])
console.log(person.address.city)

// using destructuring the object

const {age , address:{state}}=person
console.log(age)
console.log(state)
