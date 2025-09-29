//this keyword depends on how the function is called , not where it's written
//===================== Global Context=====================
console.log(this); //window object in browser
//======================Inside a method =====================
const obj = {
    name: "John",
    greet:function(){
        console.log("Hello,"+this.name);
    }
};
obj.greet(); //Hello, John
//In this above example, this refers to the obj object because greet is called as a method of obj.

//=======================In a function ======================
function test(){
    console.log(this); //window object in browser
}
test();
//In this case, this refers to the global object (window in browsers) because test is called as a regular function.
//=======================In an event handler =====================

document.getElementById("thisbtn").onclick = function(){
    console.log(this); //button element
}
//In this case, this refers to the element that received the event (the button in this case).
//=======================Arrow Functions =====================
//Arrow functions do not have their own this. They inherit this from the surrounding (lexical) scope.
const arrowObj = {
    firstname : "Alice",
    greet:()=>{
        console.log("hello",this.firstname); //undefined
    }
};
arrowObj.greet();

//Example
class User {
    constructor(fullname){
        this.fullname = fullname;
    }
    greet()
    {
        console.log("Hello,"+this.fullname);
    }
}
const user =new User("harry");
user.greet();

//=======================Losing this when Assigning ==========================
const person ={
    firstname :"Bob",
    greet:function(){
        console.log("Hello",this.firstname);
    }
};
let greetFunc = person.greet; //Assigning method to a variable
greetFunc(); //Hello undefined (or error in strict mode)

