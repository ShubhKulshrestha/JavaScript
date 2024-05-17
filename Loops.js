//Loops in Javascript...
//For loop
for (let i = 1; i <= 5; i++){
    console.log("Hello JavaScript..");
}

//Calculate sum of n numbers...
let num = prompt("Enter the number:");
sum = 0;
for(let i = 0; i <= num; i++){
    sum = sum + i;
}
console.log(sum);

//Print all even numbers from 0 to 100 using for loop.
for(let i = 0; i <= 100; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}


//while loop
let i = 1;
while(i <= 5){
    console.log("Hello JavaScript...");
    i++;
}
//Print all even numbers from 0 to 100 using while loop.
let i = 0;
while (i <= 100){
    if(i % 2 === 0){
        console.log(i);
    }
    i++;
}


//Do while loop
let i = 20;
do{
    console.log("Hello JavaScript");
    i++;
}while(i <= 10);


//For-of loop [used for strings and array]
for(let i of str){
    console.log(i);
}


//For-in loop [used for object]
let student={
    name:"Shubham",
    age:20,
    cgpa:8.5,
    isPass:true,
     
};
for(let i in student){
    console.log(i);
}

//for each loop
let arr =[1,2,3,4,5];
arr.forEach((val) => {
    console.log(val);
});
