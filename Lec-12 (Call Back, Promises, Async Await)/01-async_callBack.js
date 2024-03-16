// setTimeout(code, timeInMiliSeconds)
// console.log("Hi Harry");
// console.log("I am fetching an API");
// setTimeout(() => {
//   console.log("API Fetched"); // Will be executed after 3 sec
// }, 2000); // 2000ms = 2sec
// console.log("Welcome to the page"); // It will not wait for above to execute

// using a call back function (function that is passed as an argument)
function calculator(x, y) {
  return x * y;
}
function displayProduct(x, y, product) {
  console.log(`${x} * ${y} = ${product(x, y)}`); // product() is actually calculator
}
displayProduct(3, 5, calculator); // passing call back (calculator)
// This was synchronous call back
// --> Asynchronous call back and Call back hell
function getData(dataId, callBack) {
  setTimeout(() => {
    console.log(`Data: ${dataId}`);
    if (callBack) {
      callBack();
    }
  }, 2000); // 2s
}
// Multiple call backs Calling above getData() function
// This is CallBack Hell --> nested call backs forming a pyramid structure
// We need data 1 then data 2 then data 3..... not at same time
// getData(1, () => {
//   console.log("Fetching Data...2");
//   getData(2, () => {
//     console.log("Fetching Data...3");
//     getData(3, () => {
//       console.log("Fetching Data...4");
//       getData(4, () => {
//         console.log("Fetching Data...5");
//         getData(5);
//       });
//     });
//   });
// });



