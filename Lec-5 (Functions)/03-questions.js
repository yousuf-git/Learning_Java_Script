console.log("03-questions.js File");

// Q-3: generate an array of marks of students > 90 from a given marks array
let marks = [78, 80, 89, 90, 91, 96, 87, 99];
let toppers = marks.filter((value) => {
  return value > 90;
});
console.log("Marks: ", marks);
console.log("Toppers: ", toppers);

// Q-4: Take n as input and generate an array from 1 to n
let n = prompt("Enter Number: ");
let arr = [];
// Simple way --> for positive value only
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log(arr);

// Another way for positive and negative range separately
let arr2 = [];
if (n > 0) {
  for (let i = 1; i <= n; i++) arr2.push(i); // Add value
}
if (n <= 0) {
  for (let i = 1; i >= n; i--) arr2.push(i);
}
// The block below can be used to create array from n to 1, as on real line negative numbers are before 1
// if(n <= 0){
//     n = Number(n)
//     for(let i=n; i<=1; i++)
//         arr2.push(i)
// }
console.log(arr2);

// Q4-b : Calculate product of all elements in the array (Factorial of n)
let factorial = arr2.reduce((previous, current) => {
  return previous * current;
});
console.log(`Factorial of ${n} is ${factorial}`);

// try to calculate sum of all numbers in the array
