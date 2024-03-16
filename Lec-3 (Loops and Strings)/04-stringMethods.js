console.log("stringMethods.js File")

let title = "My Instagram"

// 1. String.toUpperCase() 
console.log(title.toUpperCase()) // MY INSTAGRAM

// 2. String.toLowerCase()
console.log(title.toLowerCase()) // my instagram

// 3. String.trim()
console.log(title.trim()) // My Instagram
title = "     " + title + "    " // whitespaces at start and end will be removed
console.log(title.trim()) // My Instagram

// 4. String.slice(start, end) // end is optional
console.log(title.trim().slice(0,3)) // Last index will not be included
console.log(title.trim().slice(1,)) // All characters from index 1(y) to the end
console.log(title.trim().slice(0,99)) // although index is out of bound but returns the whole string 

// 5. String.concat(newString)
let msg = "Hi"
let myName = "Harry"
console.log(msg.concat(myName)) // HiHarry
console.log(msg + myName) // Same as above

// 6. String.replace(oldValue, newValue)
console.log(myName.replace("H", "B")) // Barry
console.log(myName.replace("h", "b")) // h is not in myName so it will return value of myName as it is
console.log(myName.replace("r", "p")) // First r will be replaced
console.log(myName.replaceAll("r", "p")) // ALl r will be replaced

// 7. String.charAt(index)
console.log(myName.charAt(0)) // H
console.log(myName[0]) // H
myName[0] = "B" // This will not change the value at index 0
console.log(myName[0]) // still displays H instead of B --> TO replace replace will be used

// console.log(myName.charAt(69)) // No such index so nothing will be displayed

// Question 1: Input name from user and generate username for his as: Harry --> @Harry5
// Username will start from symbol @ and ends with the length of name

let inputName = prompt("Enter Your Name: ")
let username = `@${inputName+inputName.length}`
// let username = "@"+inputName+inputName.length // Same as above
console.log("Your Username is: ", username)

// There are other String functions too, can be checked on MDN Web Docs