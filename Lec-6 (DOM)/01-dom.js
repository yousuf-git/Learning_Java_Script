// --> DOM (Document Object Model)
// Node within a node is called child node
// window (created by brwoser when page is loaded)
//  ++ document (details of html)
//   ++ html
//    ++ head
//     -- meta
//     -- meta
//     -- title
//     -- link
//    ++ body
//     -- div
//      ++ img
//      ++ h1
//      ++ p
//      ++ div
//     -- script

// window is global object, its properties and functions can be accessed without writing window explicitly e.g., window.property
console.log(window); // display as an object element
console.dir(window); // display properties and functions in detail
window.console.log("Hello in window.console"); // console.log() is actually a method in window object
console.log(window.document);
// console.log(document) // same output as above line
// console.dir(window.document) // also same output as above
// console.dir() is prefered for objects
console.log(document.body.childNodes); // child node --> elements in the body
console.log("node[2]", document.body.childNodes[1]); // html code
console.dir(document.body.childNodes[3]); // type + id(if any) + value of all its properties
document.body.style.background = "black"; // access body from html document and change its background from style

//  --> Accessing elements of html
// 1. By Element Id
let title = document.getElementById("title"); // if element name is wrong, it will be null
// console.log(title) // code
console.dir(title);
// 2. By Elements Class
let cls = document.getElementsByClassName("paragraph"); // HTML Collection, and is returned empty if class name is wrong above
console.log(cls); // similar to array
let btn = document.getElementById("btn");
// console.log(btn) // html code
console.dir(btn); // details
console.log(btn.innerText); // Accessing text in the button
// btn.innerText = "Harry" // changing text in the button

// 3. By Tag
let paragraph = document.getElementsByTagName("p")
console.dir(paragraph)

// 4. By querySelector(#id/.class/tag) --> for single element
let tile = document.querySelector("#title") // if class name is used then 1st element of that class will be returned
// let tile = document.querySelector("title") // same result but upper one is preffered to differentiate as id
console.dir(title)

// 5. By querySelectorAll(#id/.class/tag) --> for multiple elements
let prg = document.querySelectorAll(".paragraph") // using class "paragraph"
// let prg = document.querySelectorAll("paragraph") // this will return empty node list bcz (.) is not used
console.log(prg) // Node list will be stored in prg

