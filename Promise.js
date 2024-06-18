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

// how to use the promise
promise.then((res) =>{...})
promise.catch((err)) =>{...})

const getPromise = () =>{
    return new Promise((resolve,reject) =>{
        console.log("I am a promise");
        resolve("Suceess");
    });
};
 let promise = getPromise();
 promise.then((res) =>{
    console.log("Promise fulfilled",res);
 });
 promise.catch((err) =>{
    console.log("rejected",err);
 });

