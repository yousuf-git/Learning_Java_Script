// Q1: Create a button element in JS. Set its Text: Click, background: red, text color: white
let btn = document.createElement("button");
btn.innerText = "CLick !";
btn.style.background = "red";
btn.style.color = "white";
//  btn.style.border = "none"
let body = document.querySelector("body");
body.prepend(btn);

// Q2: Create a paragraph tag in HTML, give it a class and css style. Now create a new class in CSS and try 
//     to append this class to paragraph
let paragraph = document.querySelector(".prg")
// paragraph.setAttribute("class", "newPrg") // It will overwrite the existing class
paragraph.classList.add("newPrg") // both classes styling will be applied now
// paragraph.classList.remove("newPrg") // can be used to remove a class