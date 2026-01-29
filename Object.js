//collection of any type of data
const person={
    name:'testing',
    age:20,
    hobbies:['cricket','listen music'],
    greet:function(){
        console.log("hello")
    }
}

//access value from object
console.log(person.name)
console.log(person['name'])

//add or modify data of object
person.job="developer"
person.salary=50000
console.log(person)

delete person.salary
console.log(person)

//nested object
const person1={
    name:'john',
    age:30,
    address:{
        city:"keshod",
        zipcode:"362220",
        street:"123 main st"
    }
}

console.log(person1)
console.log(person1?.address?.city)
console.log(Object.keys(person1))
console.log(Object.values(person1))

//object of entries
console.log(Object.entries(person1))