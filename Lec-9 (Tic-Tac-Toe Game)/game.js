let boxes = document.querySelectorAll(".boxLight")
let playerO = true;
let playerX = false;
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
console.log(boxes);
let count = 0;
for (let box of boxes) {
  box.addEventListener("click", (event) => {
    let btn = event.target;
    if (btn.innerText !== "") {
      alert("Invalid Attempt");
    } else if (playerO == true) {
      btn.innerText = "O";
      playerO = false;
      count++;
      // playerX = true
    } else {
      let btn = event.target;
      btn.innerText = "X";
      playerO = true;
      count++;
      // playerX = false
    }
    for (let arr of winPatterns) {
      // console.log(arr)
      let countO = 0;
      let countX = 0;
      for (let val of arr) {
        // console.log(val)
        if (boxes[val].innerText == "O") {
          countO++;
        }
        if (boxes[val].innerText == "X") {
          countX++;
        }
      }
      if (countO == 3) {
        alert("Player O won");
        clearGame();
        countO = 0;
        countX = 0;
        count = 0;
      }
      if (countX == 3) {
        alert("Player X won");
        clearGame();
        countX = 0;
        countO = 0;
        count = 0;
      }
    }
    if (count == 9) {
      alert("Game Tie")
      clearGame();
    }
  });
}
let resetBtn = document.querySelector("#resetBtn");
clearGame = () => {
  for (let box of boxes) {
    box.innerText = "";
    count = 0;
  }
};
resetBtn.addEventListener("click", clearGame);

// Change mode b/w dark and light
let modeBtn = document.querySelector("#modeBtn")
let mode = "light"
modeBtn.addEventListener("click", ()=>{
  if(mode==="light"){
    mode = "dark"
    modeBtn.innerText = "Dark Mode"
    document.body.setAttribute("class", "bodyLight")
    for(let box of boxes){
      box.setAttribute("class", "boxLight")
    }
  } else{
    document.body.setAttribute("class", "bodyDark")
    for(let box of boxes){
      box.setAttribute("class", "boxDark")
    }
    mode = "light"
    modeBtn.innerText = "Light Mode"
  }
})
// Mode Button animation
modeBtn.addEventListener("mouseenter",()=>{
  modeBtn.style.background = "red"
  modeBtn.style.color = "white"
})

modeBtn.addEventListener("mouseleave",()=>{
  modeBtn.style.background = "white"
  modeBtn.style.color = "black"
})
modeBtn.addEventListener("mousedown",()=>{
  modeBtn.style.background = "red"
  modeBtn.style.color = "white"
})
// reset Button
resetBtn.addEventListener("mouseenter",()=>{
  resetBtn.style.background = "red"
  resetBtn.style.color = "white"
})

resetBtn.addEventListener("mouseleave",()=>{
  resetBtn.style.background = "white"
  resetBtn.style.color = "black"
})
resetBtn.addEventListener("mousedown",()=>{
  resetBtn.style.background = "red"
  resetBtn.style.color = "white"
})
