//Two types of datatypes
//1.Primitive
//Number,BigInt,String,boolean,Symbol,null,undefine
//null is value but undefine is not value
//2.Non primitive
//array,object,function

// let num =1;
// let num2=2;
// console.log("Num ",num,num2)

// let name="krishna";
// console.log("name ",name);

// let isTrue=true;
// let isFalse=false;
// console.log("boolean ",isFalse);

// let a;
// console.log("Undefine",a);

// let big=1234567890123456789;
// console.log("BigInt is ",big);

// let Student={
//     name:"krishna",
//     roll:249,
//     address:{               //Nested object
//         city:"keshod"
//     }
// }
// console.log(Student)

// let a=[1,2,3,4,5];
// let student={

// }
// let arrayOfStudent =[{},{}];
// console.log(a);

// //function
// function greet(){
//     console.log("this is function");
// }
// greet();
// //perameter function
// function ShowValue(value){
//     console.log("Hello ",value);
//     if(value==20){
//         console.log("number");
//     }

// }
// ShowValue();
// ShowValue(20)
// ShowValue([1,2,3,4,5]);

// function Additional(a,b){   
//     console.log("Addition",a+b)
// }
// Additional(5,5);

// function Substraction(a,b){   
//     console.log("Substraction",a-b)
// }
// Substraction(5,5);

// function Division(a,b){
//     console.log("Division",a/b)
// }
// Division(5,5);
// function Multiplication(a,b){
//     console.log("Multiplication",a*b);
// }
// Multiplication(5,5);

// const add=(num1,num2)=>{
//     return num1+num2;//no any statement run after return statement
// }
// console.log("Addition",add(12,13));

// const sub=(num1,num2)=>{
//     return num1-num2;
// }
// console.log("Subtraction",sub(13,13));

// const mul=(num1,num2)=>{
//     return num1*num2;
// }
// console.log("Multiplication",mul(13,13));
// const div=(num1,num2)=>{
//     return num1/num2;
// }
// console.log("Division",div(26,13));
// //Assignment operator
// let value=10;
// console.log("default value",value);
// value+=5
// console.log(value)

// value-=5
// console.log(value)

// value*=5
// console.log(value)

// value/=5
// console.log(value)

// //Logical Operator
// let age=20;
// let hasId=true
// let obj={
//     name:"krishna"
// }
// console.log("Logical And ",age>18&&hasId);
// console.log("Logical OR ",age<18||hasId);
// console.log("Logical Not ",!hasId)
// console.log(typeof age)
// console.log(typeof hasId)
// console.log(typeof obj)

//comparision operator
let value=10;
let num="10";
console.log("value ==num:", value == num);
console.log("value === num",value === num);
console.log("value != num",value != num);