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
