// Q1: Create an H2 heading "Love is the" and then append "death of duty" in it using js
let text = document.querySelector("h2")
console.log(text)
text.innerText = text.innerText.concat(" death of duty")

// Q2: Create 3 div with common class name: "box". Access them and add some unique text in them
let divClass = document.querySelectorAll(".box")
console.log(typeof divClass) // object
console.log(divClass[0].innerHTML)
divClass[0].innerHTML = divClass[0].innerHTML.concat("<h4>Text 1</h4>")

console.log(divClass[1].innerHTML)
divClass[1].innerHTML = divClass[1].innerHTML.concat("<h4>Text 2</h4>")

console.log(divClass[2].innerHTML)
divClass[2].innerHTML = divClass[2].innerHTML.concat("<h4>Text 3</h4>")

// can also be done through loop
// console.log(divClass) // It is actually a node list(similar to arrays) so we will use for-of loop that is for arrays
// for(let div of divClass){
//     div.innerHTML = div.innerHTML.concat("<h4>Text 1</h4>")
// }

