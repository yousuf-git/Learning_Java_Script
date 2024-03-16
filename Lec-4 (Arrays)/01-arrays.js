console.log("arrays.js File")

// Array --> Collection of related items in a linear way
let arr = [23, 32, 43, 49]
let myInfo = ["Harry", "20", 20.34, true, 383428] // Can have diff data types
console.log(myInfo)
console.log(arr) // Displays size and values in array
console.log(arr.length) // Length of array
console.log("Type of Array: ", typeof arr) // Object

// Indices of array
console.log("myInfo[0]: ", myInfo[0]) // First value of myInfo arry
console.log("myInfo[69]: ", myInfo[69]) // undefined bcz index is out of bound
arr[0] = 83 // changing value at specific index
console.log(arr)
// Trying to change a value at specific index of a String
let myName = "Harry"
myName[0] = "B" // trying to change H to B
console.log(myName) // Harry, bcz Strings are immutable while arrays are mutable (can be changed)

// Accessing array through loops
// for loop
console.log("Diaplay myInfo Array by for loop:")
for(let i = 0; i<myInfo.length; i++){
    console.log(myInfo[i])
}
// for-of loop
console.log("Diaplay myInfo Array by for-of loop:")
for(let val of myInfo){
    // console.log(myInfo[idx]) // undefined bcz val is actually the value of array
    console.log(val, typeof val)
}
// for-in loop
console.log("Add 2 in every value of arr Array by for-in loop:")
for(let index in arr){
    arr[index] +=2;
    console.log(arr[index])
}
// toUpperCase() in arrays --> works if array contains String type items only
let students = ["Harry", "Rohn", "Hermoini", "Jenny"]
for(let val of students){
    console.log(val.toUpperCase())
}
// Question-1: Calculate average of marks array
let marks = [90, 89, 67, 76, 59, 69, 94]
let total = 0
for(let index in marks){
    total = total + marks[index]
}
let average = total/marks.length
console.log("Average of Marks: ", average)

// Question-2: Array of prices is given, calculate 10% off on each item and change the values in array after discount
let prices = [300, 250, 500, 600, 450]
console.log("Prices before Discount: ", prices)
// for-of loop will not work here bcz it gives the inside values of array and change the values, not the array
// for(let val of prices){
//     val =val - (val * 10) /100
// }
// console.log("Prices after discount: ", prices) // No change will occure

// using for-in loop to change the array after manipulating its values
for(let index in prices){
    prices[index] = prices[index] - (prices[index] * 10) /100
    // prices[index] = prices[index] - (prices[index] * 0.1) // Same as above
}
console.log("Prices after discount: ", prices) // Changed array will be displayed now





