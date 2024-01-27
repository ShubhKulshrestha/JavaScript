// Functions in JavaScript...
function myFunction(){
  console.log("Hi JavaScript!");
  console.log("I'm Shubham");
}
myFunction();

// using parameters
function myFunction(msg){
  console.log(msg);
}
myFunction("I love JS");

// sum two numbers
function sum(x,y){
  console.log(x+y);
}
sum(1,2);

// we also use return in it
function sum(x,y){
  s = x + y;
  return s; // only return one value
}
let val = sum(3,4);
console.log(val);

// Arrow Functions
const arrowSum = (a,b) =>{
  console.log(a+b);
}
arrowSum(3,4);

// multiplication of two numbers
const arrowMul = (a,b) =>{
  console.log(a*b);
}
arrowMul();

// another example
const printhello = () =>{
  console.log("hello");
}
printhello();


// forEach loop in Arrays...
let arr =[1,2,3,4,5];
arr.forEach((val) => {
    console.log(val);
});
// for string
let ar =["Agra","Jaipur"];
ar.forEach((val) => {
    console.log(val);
});

// to uppercase
let ary =["Agra","Jaipur"];
ary.forEach((val) => {
    console.log(val.toUpperCase());
});

let arry =["Agra","Jaipur"];
arry.forEach((val,idx) => {
    console.log(val,idx);
});

let arrry  =["Agra","Jaipur"];
arrry.forEach((val,idx,arrry) => {
    console.log(val,idx,arrry);
});

// for a given array of numbers, print the square of each value using thr forEach loop..
let num =[2,3,4,5,6];
num.forEach((num ) => {
    console.log(num * num);
});

// map method
let num = [67,52,39];
num.map((num) => {
    console.log(num);
});
 // return value
 let nums = [67,52,39];
 newarray = num.map((nums) => {
     return nums;
 });    
 console.log(newarray);                                              

// filter method
let arr = [1,2,3,4,5,6,7,8];
 let nerArr = arr.filter((arr) => {
    return arr % 2 === 0;
});
console.log(nerArr);

let marks = [97,64,32,49,99,96,86];
let toppers = marks.filter((marks) => {
  return marks > 90;
});
console.log(toppers);

// Reduce Method
let array = [1,2,3,4];
let output = array.reduce((res ,curr) =>{
    return res + curr;
});
console.log(output);

// largest number in array
let number = [1,2,3,4];
let lagestNumber = number.reduce((res ,curr) =>{
    return res > curr ? res : curr;
});
console.log(lagestNumber);
