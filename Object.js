//collection of any type of data
// const person={
//     name:'testing',
//     age:20,
//     hobbies:['cricket','listen music'],
//     greet:function(){
//         console.log("hello")
//     }
// }

//access value from object
// console.log(person.name)
// console.log(person['name'])

// //add or modify data of object
// person.job="developer"
// person.salary=50000
// console.log(person)

// delete person.salary
// console.log(person)

//nested object
// const person1={
//     name:'john',
//     age:30,
//     address:{
//         city:"keshod",
//         zipcode:"362220",
//         street:"123 main st"
//     }
// }

// console.log(person1)
// console.log(person1?.address?.city)
// console.log(Object.keys(person1))
// console.log(Object.values(person1))

// //object of entries
// console.log(Object.entries(person1))

// const user ={
//     name:'user1',
//     role:'admin',
//     designation:'developer',
//     age:24,
//     address:{
//         city:"keshod",
//         zipcode:"362220",
//         street:"123 main st"
//         }
// }
// const{name,age,role}=user
// console.log(name,age,role)

// const {name:profilename,age:profileAge}=user
// console.log(profilename,profileAge)

// const {name,age,role,state="gujrat"}=user
// console.log(name,age,role,state)

// const array=[1,2,3]
// const moreElement=[...array,4,5,6]//copy elemnt
// console.log(moreElement)
// const original=[1,2,3]
// const copie=[...original]
// console.log(copie)


// const arr1=[1,2,3]
// const arr2=[4,5,6]
// const merge=[...arr1,...arr2]
// console.log(merge)

//spread in obj


const user1 ={
    name:'user1',   
    city:"keshod"
        
}
console.log(user1)
const newObj={
    ...user1,
    role:'react developer'
}
console.log(newObj)

//copy obj
const user2 ={
    name:'user3',   
    city:"keshod"
        
}
const user3 ={
    ...user2        
}
console.log("User 3",user3)

//merge
const obj1 ={
    name:'user3',   
    age:12        
}
const obj2 ={
     role:'admin',   
    city:"keshod"
                
}
const obj3={...obj1,obj2}
console.log(obj3)