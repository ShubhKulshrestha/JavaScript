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
//function to get data
function getData(dataId){
    setTimeout(()=>{
        console.log("data",dataId);
    },2000
    );         
}
