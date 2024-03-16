// Inline event handling --> inside the HTML code
// Priority is of event handling in JS
let box = document.querySelector("div");
box.onmouseover = () => {
  console.log("Entered in the box");
};
box.onmouseout = () => {
  // if same event handling is done than old one will be overwrited
  console.log("Exited from the box");
};
let printBtn = document.querySelector("#nameBtn");
function print() {
  let nameTf = document.querySelector("#tf");
  let myName = nameTf.value;
  if (myName != null && myName.trim().length !== 0) {
    console.log("Name:", myName);
  } else {
    console.log("Enter Name First");
  }
}
printBtn.onclick = () => {
  print(); // this print() method can be used whenever the same handling is required
};
// Properties of event object
let infoBtn = document.createElement("button");
infoBtn.innerText = "Print Event Info";
document.querySelector("#inputDiv").after(infoBtn);
// Event object contains information about the event
function printEventInfo(event) {
  // creating a function to be called whenever event info is to be displayed
  console.dir(event);
  console.log("Event Target: ", event.target);
  console.log("Event Type: ", event.type);
}
infoBtn.onmouseenter = (e) => {
  // for mouse hover event
  printEventInfo(e);
};
infoBtn.onmouseleave = (e) => {
  // for mouse hover out event
  printEventInfo(e);
};
infoBtn.onmouseup = (e) => {
  // for mouse hover out event
  printEventInfo(e);
};
infoBtn.onmousedown = (e) => {
  // for mouse hover out event
  printEventInfo(e);
};

infoBtn.onclick = (e) => {
  // for mouse click event
  printEventInfo(e);
};
// infoBtn.ondblclick = (e) =>{ // for mouse double click
//     printEventInfo(e)
// }
// addEventListener("event", handlerFunction())
let eventListenerBtn = document.createElement("button")
eventListenerBtn.innerText = "Handling done by Event Listener"
document.querySelector("body").append(eventListenerBtn)

eventListenerBtn.addEventListener("click", () =>{
    console.log("Event Handler 1")
})
handler = () =>{
    console.log("Event Handler 2")
}
eventListenerBtn.addEventListener("click", handler) // handler function is used as a variable bcz we may need to remove it in future
eventListenerBtn.addEventListener("click", () =>{ // if no need to remove than simply define the function here
    console.log("Event Handler 3")
})
// removeEventListener can be used to remove a specific event listener
eventListenerBtn.removeEventListener("click", handler)
