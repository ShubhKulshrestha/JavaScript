//Here the examples of object in JavaScript..
const profile={
    username:"Shubh Kulshrestha",
    posts:1,
    followers:85,
    following:157,
};
console.log(profile);

const product={
    name:"Pen",
    price:200,
    rating:4,
};
console.log(product);

//Function in object
const student = {
    name:"Shubh",
    class:"BCA",
    age:20,
    marks:90.00,
    fun : function(){
        console.log("Marks is ",this.marks);// student.marks
    },
};
// we can also define the function like this
const student = {
    name:"Shubh",
    class:"BCA",
    age:20,
    marks:90.00,
    function(){
        console.log("Marks is ",this.marks);
    },
};
