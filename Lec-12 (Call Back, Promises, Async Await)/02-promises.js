// Promises Syntax --> arrow function inside the Promise()
let promise = new Promise((resolve, reject) => {
  // resolve and reject are 2 handlers by JS
  console.log("This is a Promise Object: "); // Initially, promise state will be pending (if no resolve or reject is executed)
  resolve("Sucess"); // This will change the promis state fullfilled and result be the value in resolve()
  // reject("Network Error") // This will change the promis state to rejected and result will be the value in reject()
  // only one of resolve or reject can be used at a time
});
console.dir(promise);
// Now below promise is fulfilled after 3 sec
let promise2 = new Promise((resolve, reject) => {
  console.log("This is promise object 2: ");
  setTimeout(() => {
    console.log("Data Returned");
    resolve("success"); // set value of result to success
  }, 3000); // 3sec
});
console.dir(promise2); // drop down it before and after seeing Data Returned on console, see the difference
// creating a function that returns promise

// Creating a function (say it as an API) that returns promise (it will return data after 4sec)
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data ", dataId);
      resolve("Data Returned");
      // reject("Data fetch error")
    }, 4000);
  });
}
// let dataPromise = getData(23);
// console.log("This is data promise returned by getData(23)");
// console.dir(dataPromise);

// How to use the returned promise
// There are 2 methods --> promise.then((result)=>{...}) & promis.catch((error)=>{...})
// Below is the function that returns a promise to display the value passed to it in 4sec
function getPromise(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (val) {
        resolve(val); // stored in result
      } else {
        reject("No Value Given");
      }
    }, 5000);
  });
}
// let valPromise = getPromise(5); // call with and without argument and see the difference
// console.log("This is valPromise returned by getPromise()")

// valPromise.then((resolvedResult)=>{
//     console.log("Value: ", resolvedResult)
//     console.log(".then() executes")
// })

// valPromise.catch((error)=>{
//     console.log(error)
//     console.log(".catch() executes")
// })

// Now I want to display value one after the other in each 4 sec
// Below 2 promises will return data at same time bcz both will run in parallel and then return value in same time (5sec)
// let valPromise1 = getPromise(10);
// valPromise1.then((resolvedResult)=>{
//     console.log("Value: ", resolvedResult)
// })
// let valPromise2 = getPromise(20)
// valPromise2.then((resolvedResult)=>{
//     console.log("Value: ", resolvedResult)
// })

// calling promise2 inside then will wait for more 5sec after showing value 10
// let valPromise1 = getPromise(10);
// valPromise1.then((resolvedResult) => {
//   console.log("Value: ", resolvedResult);
//   let valPromise2 = getPromise(20);
//   valPromise2.then((resolvedResult) => {
//     console.log("Value: ", resolvedResult);
//   });
// });
// Below syntax is Same as above
// getPromise(10).then((resolvedResult) => {
//   console.log("Value: ", resolvedResult);
//   getPromise(20).then((resolvedResult) => {
//     console.log("Value: ", resolvedResult);
//   });
// });

// Now solving the same problem of call back hell by means of promises chain (you can revise call back hell in mind)
// Creating a function (say it as an API) that returns promise (it will return data after 4sec)
function fetchData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataId); // dataId is stored as result
      // reject("Data fetch error") // can be used to learn--> catch(err)
    }, 3000);
  });
}
console.log("Fetching Data 1...")
fetchData(1)
  .then((res) => {
    console.log("Data: ", res); // displaying the result of fetchData(1)-promise
    console.log("Fetching Data 2...")
    return fetchData(2); // .then() is returning a promise at call of fetchData(1)
  })
  .then((res) => {
    console.log("Data: ", res); // displaying the result of fetchData(2)-promise
    console.log("Fetching Data 3...")
    return fetchData(3); // .then() is returning a promise at call of fetchData(1).then()
  })
  .then((res) => {
    console.log("Data: ", res); // displaying the result of fetchData(3)-promise
    console.log("Fetching Data 4...")
    return fetchData(4); // .then() is returning a promise at call of fetchData(1).then().then()
  })
  .then((res) => {
    console.log("Data: ", res); // displaying the result of fetchData(4)-promise
  });
// it will be simple as fetchData(1).fetchData(2)-promise.fetchData(3)-promise.fetchData(4)-promise
// ... befor calling new promise previous Data will be returned/displayed and then after 3 sec next promise will display data
