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
