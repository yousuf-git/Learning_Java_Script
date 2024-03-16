// Q1: Create a button to toogle between light and dark mode
let toogleBtn = document.querySelector("#toogleBtn");
let count = 1;
// toogleBtn.addEventListener("click", () => {
//   if (count % 2 == 0) {
//     document.querySelector("body").style.background = "white";
//     count++
//   } else {
//     document.querySelector("body").style.background = "black";
//     count++
//   }
// });
// Method 2
// let mode = "light"
// toogleBtn.addEventListener("click", () =>{
//     if(mode ==="light"){
//         mode = "dark"
//         document.querySelector("body").style.backgroundColor = "black"
//         console.log("Current Mode is", mode)
//     }
//     else{
//         mode = "light"
//         document.querySelector("body").style.backgroundColor = "white"
//         console.log("Current Mode is", mode)
//     }
// })
// Method 3 by using CSS classes
let mode = "light"
toogleBtn.addEventListener("click", () =>{
    if(mode ==="light"){
        mode = "dark"
        document.querySelector("body").setAttribute("class", "dark")
        console.log("Current Mode is", mode)
    }
    else{
        mode = "light"
        document.querySelector("body").setAttribute("class", "light")
        console.log("Current Mode is", mode)
    }
})
