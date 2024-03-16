console.log("Hi Harry"); // Used to print a value on screen

// Using Variables
// Method-1
//age = 10; // normal declaration

// Method-2 --> using var
var myAge = 10; // Can be re-dclared and updated --> Global Scope
myAge = 20;
var myAge = 30;

// Method-3 --> using let
let myName = "Harry"; // Cannot be re-dclared but updated --> Block Scope
myName = "Mr. Harry"; // updating value
// let myName = Harry; //This will result in syntax error

// Method-4 --> using const for declaring constants
const CNIC = 3630238932893; // Cannot be re-dclared and updated --> Block Scope
//CNIC = 20;  // Result in error bcz constant cannot be reassigned

console.log("Name: ", myName);
console.log("Age: ", myAge);
console.log("CNIC: ", CNIC);

let und; // by default this variable will be undefined, if not initialized
console.log("Value of und: ", und);

//const myConstant ; // Result in error bcz constant must be initialized at start

// --> Block Scope
// Block 1
{
  let age = 30;
  //let age = 30; // error
  console.log("Block 1 Age: ", age);
}
// Block 2
{
  let age = 40;
  console.log("Block 2 Age: ", age);
}
