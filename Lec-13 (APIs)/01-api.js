// First connect to internet for successfull API call

const URL = "https://cat-fact.herokuapp.com/facts";
let promise = fetch(URL); // will return a promise
console.log(promise);
promise.then((res) => {
  console.log(res.status); // 200 if successfull
});

// API call by async-await
getFact = async () => {
  let response = await fetch(URL); // returns a response object
  console.log(response); // will be in JSON (Java Script Object Notation) format
  let data = await response.json(); // will return JS object
  console.log(data);
  console.log(data[0]); // still have a lot of info, I got 5 facts
  console.log(data[0].text); // it will return the fact 1 in the form of a text
  console.log(data[1].text); // it will return the fact 2 in the form of a text
  console.log(data[2].text); // it will return the fact 3 in the form of a text
};
// IIFE to invoke getFact() automatically one time
// (()=>{
//     getFact();
// })();

// Using the text from API to display on html page
const btn = document.querySelector("#btn");
const para = document.querySelector("#fact");

btn.addEventListener("click", async () => {
    console.log("Fetching fact....")
  let res = await fetch(URL);
  let fact = await res.json();
  console.log(para.innerText)
  para.innerText = fact[0].text;
});


