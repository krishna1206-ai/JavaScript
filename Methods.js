// string method
// length()
// trim()
// toUpperCase()
//toLowerCase()
//includes()
//indexOf()
//Slice()
//subString()
//replace()
//concate()

// let str=" Hello javascript world ";
// let sub=" thank you"
// console.log(str);
// console.log('Length: ',str.length)//count character with space
// let trm=str.trim();//two types 1.Ltrim 2.Rtrim
// console.log('Remove space: ',trm)
// console.log('After trim: ',trm.length);
// console.log('Uppercase: ',str.toUpperCase());
// console.log('Lowercase: ',str.toLowerCase());
// console.log('Include: ',str.includes("test"));
// console.log('indexOf: ',str.indexOf("javascript"))
// console.log('Slice: ',str.slice(2,7))//allow minus
// console.log('Substring: ',str.substring(2,7))//not allow minus
// console.log('replace: ',str.replace("javascript","React"));
// console.log("concate: ",str.concat(sub));
// console.log("Split: ",str.split(" "));


//array methods
// length()
// push()
// pop ()
// unshift()
// shift()
// concat()
// includes()
// indexOf()
// slice()
// join()
// delete()
// Map()
// filter()
// find()
// forEach()
// sort()
// reverce()
// flat()

// let arr=['one','two','three',1,{name:'name'}]
// console.log("Default Array: ",arr);
// console.log("length: ",arr.length);
// console.log("Push: ",arr.push("Four"))//add at last
// console.log("New Array: ",arr)
// console.log("Pop: ",arr.pop())//remove from last
// console.log("After Pop",arr)
// console.log("Unshift: ",arr.unshift("first element"))//add first
// console.log("Unshift: ",arr)
// console.log("shift: ",arr.shift())//remove first
// console.log("shift: ",arr)
// let newarr=['str1','str2']
// console.log("concate array: ",arr.concat(newarr))//concate two or  more array
// console.log("Includes: ",arr.includes('first'))//check include element or not
// console.log("IndexOf: ",arr.indexOf("two"))
// console.log("Slice: ",arr.slice(2,5))
// //console.log("Splice: ",arr.splice (2,4))//modify original array
// console.log("Join: ",arr.join(" . "))
// delete arr[4];
// console.log(arr)

//Array iteraction method
console.log("Array iteraction method: ")//all are give new array
let number=[1,2,3,4,5]
console.log("Map: ",number.map(num=>num*2));//loop
console.log("filter: ",number.filter(num=>num>2))//condition with loop
console.log("forEach: ");
number.forEach(num=>console.log(num))
let num=[3,5,2,4,1]
// console.log("Sort: ",num.sort())
// console.log("Reverce: ",num.reverse())
let nestedArray=[1,2,[3,4],[5,6]]
console.log("default nested array: ",nestedArray);
let flatArray=nestedArray.flat()//structure flat array
console.log("FlatArray: ",flatArray)