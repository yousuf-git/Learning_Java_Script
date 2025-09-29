//Type Casting in JavaScript
//>> Implicit Type Casting(type coercion)
// Implicit Type Casting occurs when JavaScript automatically converts one data type to another.
console.log('5'+10);//510
console.log("5"-2);//3
console.log("5"*2);//10
console.log("5"/2);//2.5
console.log("5"+true);//5true
console.log("5"-true);//4
console.log("5"+null);//5null
console.log("5"-null);//5
console.log("5"+undefined);//5undefined
console.log("5"-undefined);//NaN

//>> Explicit Type Casting
//You manually convert one data type to another using functions like String(), Number(), Boolean(), etc.


console.log(Number("5")+7);//12
console.log(String(5)+7);//57
console.log(Boolean(1));//true
console.log(Boolean(0));//false
console.log(Boolean("Hello"));//true
console.log(Boolean(""));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false
console.log(Number(true));//1
console.log(Number(false));//0
console.log(String(true));//"true"
console.log(String(false));//"false"

//Example 
let userInput = "42";
let total = Number(userInput)+8;
console.log(total);//50