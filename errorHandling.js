// Error handling
let a = 5;
let b = 10;
console.log("a = ",a);
console.log("b = ",b);
console.log("a + b = ",a + b);
try{
console.log("a + b = ",a + c); // error
} catch(err){
    console.error(err);

}
console.log("a - b = ",a - b);
console.log("a * b = ",a * b);
console.log("a / b = ",a / b);
