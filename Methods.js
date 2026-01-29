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

let str=" Hello javascript world ";
let sub=" thank you"
console.log(str);
console.log('Length: ',str.length)//count character with space
let trm=str.trim();//two types 1.Ltrim 2.Rtrim
console.log('Remove space: ',trm)
console.log('After trim: ',trm.length);
console.log('Uppercase: ',str.toUpperCase());
console.log('Lowercase: ',str.toLowerCase());
console.log('Include: ',str.includes("test"));
console.log('indexOf: ',str.indexOf("javascript"))
console.log('Slice: ',str.slice(2,7))//allow minus
console.log('Substring: ',str.substring(2,7))//not allow minus
console.log('replace: ',str.replace("javascript","React"));
console.log("concate: ",str.concat(sub));
console.log("Split: ",str.split(" "));
