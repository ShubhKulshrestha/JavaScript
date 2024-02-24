// prototype example
const employee = {
    calcTax(){
        console.log("Tax rate is 10%");
    }
};
const Shubh ={
    salary: 50000,
};
Shubh.__proto__ = employee;
console.log(Shubh.calcTax());
// Note:-
//If object and prototype have same method, object's method will be used.
//Explain with an example..
const employee = {
    calcTax(){
        console.log("Tax rate is 10%");
    }
};

const Shubh ={
    salary: 50000,
    calcTax(){
        console.log("Tax rate is 20%");
    }
};
Shubh.__proto__ = employee;
console.log(Shubh.calcTax());
