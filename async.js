//Asynchronous in javascript
console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("hello");
}, 4000);
 
console.log("three");
console.log("four");
// another example of asynchronous 
const hello = () =>{
    console.log("hello");
}
setTimeout(hello,3000);
