// Attributes --> id, class, src etc. of the elements in html

// I have an h1 heading in html
let h1 = document.querySelector("h1");
console.dir(h1);

// getAttribute("Attribute") --> returns the value of attribute
let h1_Id = h1.getAttribute("id");
console.log(h1_Id); // null if id is not set

// setAttribute(attribute, value) --> used to set the value of specific attribute
// created an h2 heading in HTML and then accessing here
let h2 = document.querySelector("h2");
console.log(h2.getAttribute("id")); // null bcz its not set in HTML
h2.setAttribute("id", "wlc"); // setting id dynamically in JS

// style property is used to access and modify node style 
let h2_Id = h2.getAttribute("id");
console.log(h2_Id); // wlc
console.log(h2); //  view HTML where id is added now
h2.style.color = "blueviolet";

let div = document.querySelectorAll("div"); // node list --> [div]
// div.style.color = "red" // invalid bcz div has 2 more  nodes
console.log(div)
console.dir(div)
// let divArray = Array.from(div) // can be used to convert node list to an array
// console.log(divArray)
for (let node of div) {
  node.style.color = "red"; // color of h2 is specifically defined above that is why it will not change here
  node.style.fontStyle = "italic" // fontStyle of both h1 and h2 will be changed
}
// h1.style.visibility = "hidden" // can be used to hide elements runtime
// Elements can be created and then added to DOM

// document.createElement("tagName") --> Creating new element 
let btn = document.createElement("button")
// console.log(btn)
// Uncomment and execute followinf methods one by one
btn.innerText = "Button Appended"
div = document.querySelector("div")

// node.append(element) --> add at the end inside the div
// div.append(btn)

// node.prepend(element) --> add at the start inside the div
// btn.innerText = "Button Prepended"
// div.prepend(btn)

// node.after(element) --> add just after the div (outside)
// btn.innerText = "Button After div"
// div.after(btn)

// node.before(element) --> add just before the div (outside)
btn.style.background = "red"
btn.style.color = "white"
btn.innerText = "Button Before div"
div.before(btn)

// node.remove() --> Remove element
let heading = document.createElement("h4");
heading.innerText = "New Heading to be deleted";
div.after(heading);
// div.remove();
heading.remove();

// appendChild()
// removeChild()


