//Promises in javascript...
let promise = new Promise((resolve,reject) =>{
    console.log("I am a promise");
});

//pending state
let promise = new Promise((resolve,reject) =>{
    console.log("I am a promise");
    
});
//resolve state
let promise = new Promise((resolve,reject) =>{ 
    console.log("I am a promise");
    resolve("Suceess");
});
//reject state
let promise = new Promise((resolve,reject) =>{
    console.log("I am a promise");
    reject("Error");
});
// use the promise
promise.then((res) =>{...})
promise.catch((err)) =>{...})
