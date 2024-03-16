console.log("strings.js File")

// Strings creations
let str = "Harry"
let str2 = 'Mr. Harry'
let str3 = `Mr. Harry Special` // Template Literals --> for concatenation of expressions / String Interopolation 
// `string ${expression/variable} string`

// 3 Different ways of displaying a same line

let line = `I and ${str2} like coding`
console.log(line)

let line_2 = "I and " + str2 + " like coding"
console.log(line_2)

console.log("I and ", str2, "like coding")

// Using expression
let exp = `69 is less than 70: ${69<70}` // true
console.log(exp)

// length property of strings
console.log("Length of str: ", str.length)

// Escape characters
str = "Hi\nHarry"

console.log(str)
let out = `Length of str: ${str.length}`
console.log(out) // returs 8 bcz \n is counted as a single charcater
