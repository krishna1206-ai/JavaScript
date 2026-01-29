//1.var (Re-declare)
var a=10;
var a=15;
console.log(a);

//2.let(Not Re-declare but declare in another block)
let a=10;
if(true){
    let a=20
}
console.log(a)

//3.Const (Declare only once)
const pi=3.14;
console.log(pi);