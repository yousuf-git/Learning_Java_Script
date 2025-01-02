console.log("arrayMethods.js File")
// Array Methods

// 1. push(val1, val2, ...) --> Used to add item(s) at the end of array
let subjects = ["math", "physics", "computer"]
console.log("Subjects: ", subjects)
subjects.push("English", "Urdu")
console.log("Subjects After Push(): ", subjects)

// 2. unshift(val1, val2, ...) --> To add item(s) at the start of array
subjects.unshift("Islamiyat")
console.log("Subjects after unshift(): ", subjects)

// 3. pop() --> Used to delete item from the end of array, Also returns the deleted item
console.log("Deleted Item after pop(): ", subjects.pop()) // Deleted item will be displayed 
console.log("Subjects Array after pop(): ", subjects) // updated array will be displayed
// subjects.pop("computer") // will not remove computer subject but urdu will be removed bcz items are removed from the end

// 4. shift() --> Delete item from the end, Also returns the item
console.log("Deleted Item after shift(): ", subjects.shift())
console.log("Subjects after shift(): ", subjects)

// 5. toString() --> Convert the array to String and returns the String, (doesn't changes the original array)
let nameArr =  ["H", "a", "r", "r", "y"]
console.log("Name Array: ", nameArr)
let nameStr = nameArr.toString()
console.log("Name String: ", nameStr)
// console.log("Name Array: ", nameArr) // Name array will not be changed
nameStr = nameStr.replaceAll(",", "")
console.log("Name String updated: ", nameStr)
// console.log("Name String in Upper case: ", nameStr.toUpperCase())

// 6. concat(array) --> add/join another array, Original array will not be changed but updated one will be returned
let prices = [20, 30, 30, 50] 
let prices2 = [40, 50]
let updatedPrices = prices.concat(prices2)
console.log("Updated Prices after concat(): ", updatedPrices)
// console.log("Original Prices: ", prices) // will be same as initial prices with 4 indices/values

// 7. slice(startIndex, endIndex) --> returns a part of arry without changing the array itself
let slice = updatedPrices.slice(0,2) // Ending index value will not be included
console.log("Slice: ", slice)
console.log("Without using ending index: ", updatedPrices.slice(1)) // return values from index 1 to end
console.log("without using any index: ", updatedPrices.slice()) // returns the original array, can be used to make copy of array

// 8. splice(selectedIndex, deleteItemsCount, newItems....) --> Modify array, changes the original array and return deleted item (if any)
let countries = ["Pak", "Arab", "Turkey"]
console.log("Countries: ", countries)
// Adding an Item at index 1
console.log("Adding a country at index 1: ", countries.splice(1, 0, "Palestine")) // returns deleted value, here [] will be displayed
console.log("Updated Countries ", countries)
// Updating the added item at index 1
console.log("Updating added item: ", countries.splice(1, 1, "Iraq"))
console.log("Updated Countries ", countries)
// Removing the item from index 1
console.log("Removed Item: ", countries.splice(1,1)) // Iraq
console.log("Updated Countries ", countries)
// Deleting all values from index 1
console.log("Deleted Values: ", countries.splice(1))
console.log("Updated Countries ", countries)

// Question 3: Create an array to store comapnies: Creem, Toyota, Uber, Microsoft, Google, Netflix
let comapnies = ["Creem", "Toyota", "Uber", "Microsoft", "Google", "Netflix"]
console.log(comapnies)

// part a: Remove first company from array
console.log("Removed comapny: ", comapnies.shift())
console.log("Updated Companies: ", comapnies)

// part b: Remove Uber and add InDrive in its place
console.log("Updating Company: ", comapnies.splice(1, 1, "InDrive")) // working with updated comapnies array
console.log("Updated Companies: ", comapnies)

// part c: Add Disney at the end
comapnies.push("Disney")
console.log("Updated Companies: ", comapnies)

// 9. reduce(callback, initialValue) --> returns a single value after performing the operation on all elements of array
// Syntax:
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// Example 1: Sum of all elements of array
let numbers = [1, 2, 3, 4, 5]
let sum = numbers.reduce((total, num) => total + num, 0) // 0 is the initial value of total
console.log("Sum of numbers: ", sum)    // 15

// Example 2: Find the maximum number from array
let max = numbers.reduce((maxNum, num) => Math.max(maxNum, num), 0)
console.log("Max Number: ", max)        // 5

// Reference from MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


