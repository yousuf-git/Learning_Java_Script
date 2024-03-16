console.log("Input.js File")

// alert --> Display a one type popup msg
alert("Harry, this is an alert message !");

// prompt --> One Time user input
// Direct display the input
// console.log(prompt("Input Number: "));

// // Use the input to store in a variable
// let inputName = prompt("Enter Name: ");
// console.log("inputName: ", inputName);

// Question 1: Input a number and check if it is multiple of 5

let n = prompt("Enter Number: ");
if(n%5 == 0){
    console.log(n, " is multiple of 5");
} else{
    console.log(n, "is not a multiple of 5");
}

// Question 2: Assign grades according to marks