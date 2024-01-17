// Conditional Statement...

// if statement
let num = prompt("Enter your age:");
if(num >= 18){
    console.log("Eligible for vote");
}

// if else statement
let digit = prompt("Enter the Number:");
if(digit % 2 == 0){
    console.log("Even Number");
}else{
    console.log("Odd Number");
}

// else if statement
let mark = prompt("Enter your marks(0-100).");
let Grade;
if (mark >= 90 && mark <= 100) {
    Grade = "A";
}
else if (mark >= 80 && mark <= 89) {
    Grade = "B";
}
else if (mark >= 70 && mark <= 79) {
    Grade = "C";
}
else if (mark >= 60 && mark <= 69) {
    Grade = "D";
}
else if (mark >= 50 && mark <= 59) {
    Grade = "E";
}
else {
    Grade = "F";
}
console.log("Your Grade:",Grade);
