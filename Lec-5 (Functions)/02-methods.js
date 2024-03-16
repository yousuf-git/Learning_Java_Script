console.log("methods.js File");

// If a function is linked with specific data structure like String or Array, it is called Method
// Array.forEach(callBackFunction) --> forEach() is and Higher Order Method
// Higher Order Function/Method --> That takes function as parameter or returns a function
// Call Back Function --> That is passed to higher order function as an argument

let marks = [20, 40, 40, 60];
console.log(marks);

marks.forEach(function info(val, idx, arr) {
  // console.log("Array: ", arr )
  console.log("Value", val, "Index", idx);
});
// forEach() method to increment 1 in numerical array
const increment = (val, idx, arr) => {
  // using arrow function inside forEach(), here idx and arr is optional
  // console.log("Original Array: ", marks) will be same as arr (array in the call back function)
  console.log("Array in the function: ", arr);
  console.log("Original Value at index: ", idx, "is ", val);
  arr[idx]++;
  console.log("Value After Increment: ", arr[idx]);
};
marks.forEach(increment); // increment is a callBack function passed to HOM forEach
console.log("Finally, Array after increment: ", marks);

// Question 2: Display square of each value in array using forEach() method
console.log("Question 2 Solution");
let num = [2, 3, 4, 5];
num.forEach((val) => {
  console.log(`Square of ${val} is ${val * val}`);
});

// map() --> generates new array based on the operations performed by call back function
// Syntax: Array.map(callBack)
// using map function to generate a new array that contains upperCase of original strings
console.log("map() function");
let lowerArr = ["h", "a", "r", "r", "y"];
let upperArr = lowerArr.map((val) => {
  return val.toUpperCase();
});
console.log(lowerArr); // Original array
console.log(upperArr); // Mapped array

// filter() --> Used to filter values based on some condition
// Syntax: Array.filter(callBack)
// using filter() to get an array that contains all even numbers in the original array
console.log("filter() function");
num = [1, 2, 3, 4, 5, 6];
let evenNum = num.filter((value) => {
  return value % 2 == 0; // if condition is true value is stored in new array otherwise not
});
console.log(num);
console.log(evenNum);

// reduce() --> used for multiple input but single output
// Syntax: Array.reduce(callBack(previousVal, currentVal))
/* previousVal = value at index 0, currentVal = value at index 1 ; for each iteration index is incremented for currentVal
   and previousVal is value returend by Call Back function */
// Using reduce to get average of array
count = 1;
let sum = num.reduce((previous, current) => {
  count++; // indices counter
  return previous + current;
});
let avg = sum / count;
// let avg = sum/num.length ; // same as above
console.log("Num: ", num);
console.log("Average: ", avg);
