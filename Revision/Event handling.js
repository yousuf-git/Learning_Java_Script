//Event handling 
//Events = user interactions or browser actions

//Button Clicked Event
let myButton = document.getElementById("btn").addEventListener("click",()=>{
    alert("Button Clicked");
});
//Mouse Over Event
let text = document.getElementById("text");
text.addEventListener("mouseover", function(){
    text.style.color = "red";
});
// Input change event
let input = document.getElementById("input");
input.addEventListener("change", function(){
    alert("You Type "+this.value);
});
//Double Click Event
let dbtn = document.getElementById("dbtn");
dbtn.ondblclick = function(){
    alert("Button Double Clicked");
};
//Key pressed event 
let keyInput = document.getElementById("keyinput");
keyInput.addEventListener("keypress", function(event){
    alert("Key Pressed "+ event.key);
});
//event is the event object.
//event.key is just one of its properties that gives the actual key pressed.