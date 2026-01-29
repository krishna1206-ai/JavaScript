let student={
    name:"       firstname",
    email:"USER@GMAIL.COM",
    course:"javascript,React,Node",
    marks:[45,78,60,90,33],
    hobbies:["music","cricket","Reading"],
    address:["india",["Gujrat","Ahemdabad"]]
};

// console.log("Remove space:",student.name.trim())
// console.log("LowerCase: ",student.email.toLowerCase())
// console.log("Include React or not: ",student.course.includes('React'))
// console.log("Index of Node: ",student.course.indexOf("Node"))
// console.log("Replace: ",student.course.replace("javascript","JS"))
// console.log("Convert in array: ",student.course.split(','))
// console.log("Length: ",student.name.length)

// //Array Operation
// console.log("Add Swimming: ",student.hobbies.push("Swimming"))
// console.log("Remove Last Hobbie: ",student.hobbies.pop())
// console.log(student.hobbies)
// console.log("Add at first: ",student.hobbies.unshift("Drawing"))
// console.log(student.hobbies)
// const merge={...student.hobbies,...student.course}
// console.log("Merge: ",merge)
// console.log("include: ",student.course.includes("React"))
// console.log("Index: ",student.course.indexOf("JS"))
// console.log(student.marks[0])
// console.log(student.marks[1])
// let marksStr = "45,78,60,90,33";
// let newMark = marksStr
//   .split(",")
//   .map(Number)
//   .filter(m => m >= 40);

// console.log(newMark);

// console.log("String: ",student.hobbies.toString())

//Array Iteraction Method
console.log("Add 5 marks")
student.marks=student.marks.map(m=>m+5);
console.log(student.marks)

let passedMarks=student.marks.filter(m=>m>=40);
console.log("get only pass marks: ",passedMarks)

let FindMark=student.marks.find(m=>m>80);
console.log("Find marks above 80: ",FindMark)

student.hobbies.forEach(h=>console.log("Hobby:",h))

let reverseMark=student.marks.reverse()
console.log("Reverse marks: ",reverseMark)

let FlatAddress=student.address.flat()
console.log("Flat address ",FlatAddress)

//object Handling
student.result=student.marks.every(m=>m>=40)?"pass":"Fail"
console.log(student)