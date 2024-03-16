// Operators in Java Script
// Arithmetic:  + , - , * , / , %, ** (Exponential)
let a = 20, b = 2
console.log("a**b = ", a**b);

// Unary Operators --> Increment (++) and decrement (--)
a++;
console.log("Vlaue of A after increment: ", a);
// Prefix and Postfix concepts aslo work here

// Assignment Operators
// = , += , -= , *= , /= , %=, **=

let x = 8, y=3
console.log("x: ", x, ", y: ", y);
console.log("x**=y: ", x**=2);

let i = 8, j=3
console.log("i%=j: ", i%=j);
console.log("");

// Comparison operators
// == , === , != , !== , < , > , <= , >=

x = 5, y = "5"
console.log("x: ", x, "Type: ", typeof x);
console.log("y: ", y, "Type: ", typeof y);
console.log("x==y --> ", x==y); // Will return true bcz js convets string to number if it only contains number and then compares
console.log("x===y --> ", x===y); // Will return false bcz this will check value as well as type

// Logical operators --> && , || , !
// Conditional Statements --> if-else , if-else-if , switch --> all have same syntax as any other language
if(x===y){
    console.log("Value and Type of x and y is Equal");
} else{
    console.log("Value and Type of x and y is Not Equal");
}