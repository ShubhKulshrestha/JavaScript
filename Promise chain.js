// promise chain in js 
function asyncFunc(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
       console.log("some data1");
       resolve("success");
       },4000);
});

}
console.log("fetching data1");
let p1 = asyncFunc();
p1.then((res) =>{
    console.log(res);

});
