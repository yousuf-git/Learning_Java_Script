console.log("functions.js File");

// function definition
function print() {
  console.log("Hi Harry");
}
// function call/invoke
print();

// parameterized function
// function print(val){ // if same name is used, it will overwrite the previous function and previous one cannot be called
function printVal(val) {
  // val variable has block scope only
  console.log("Value: ", val);
}
printVal("Hi harry");

// Value returning function
function cube(val) {
  return val * val * val;
  // console.log("Done") // All the code After return is not exutable
}
let n = 8;
console.log("Cube of n: ", cube(n));

// Arrow function
const square = (num) => {
  return num * num;
};
console.log("Sqaure of n: ", square(n));

// Question 1: Create a function that takes a String and returns number of vowels in the string
function vowelCount(str) {
  count = 0;
  for (let val of str) {
    str = str.toUpperCase();
    if (val == "A" || val == "E" || val == "I" || val == "O" || val == "U") {
      count++;
    }
  }
  return count;
}
let myName = "HArry";
console.log("Vowels in myName: ", vowelCount(myName));
// try to create the same function by arrow method
