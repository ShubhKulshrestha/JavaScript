// Inheritence in JavaScript...
class parent{
    hello(){
        console.log("Hello");
    }
}
class child extends parent{}
let obj = new child();

class person {
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class engeneer extends person{
    Work(){
        console.log("Solve Problems, Build Something");

    }

}
let shubhobj = new engeneer();

//NOTE: If child and parent have same method, child's method will be used.
// explained below with example..
class person {
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    Work(){
        console.log("Working");

    }
}
class engeneer extends person{
    Work(){
        console.log("Solve Problems, Build Something");

    }
}
let shubhobj = new engeneer();
//This things called Method Overriding.
