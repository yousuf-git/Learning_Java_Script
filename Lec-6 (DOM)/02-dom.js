// Accessing and making welcome text and paragraphs black (if 01-dom script is made as comment)
document.querySelector("#wlc").style.color = "black" // welcome text

let paragraph = document.querySelectorAll(".paragraph") 
// console.log(paragraph)
// paragraph.style.color = "black" // not valid, bcz it is node list
paragraph.forEach(element => {
    element.style.color = "black"
});

// Properties in accessed elements
// 1. tagName property
let titleTag = document.getElementById("title").tagName
console.log(titleTag)

// 2. innerText --> contains text of component and its all children
// 3. innerText --> contaons HTML code of the node as a String
let div = document.querySelector("div")
console.dir(div)
console.log(div.innerText)
console.log(div.innerHTML)
// These properties can also be modified
// div.innerText = "hi div" // will remove all tags within it and set its text to given String
// div.innerHTML = "<h1>New Heading</h1>" // will remove all HTML code in it and add new one

// Accessing element ul within div tag
let heroesList = div.querySelector("#heroesList") // id of ul is heroesList
console.log(typeof heroesList) // object
heroesList.style.color = "blueviolet"
// forEach() loop is not valid in this case bcz heroesList i.e, ul tag element is an object type not a node list
// heroesList.forEach((element=>{
//     element.style.color = "pink"
// }))
        // try to change font of heroesList

