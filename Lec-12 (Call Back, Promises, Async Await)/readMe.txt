Objective --> Async Await >> Promises Chains >> CallBack Hell

Synchronous Programming: Statements are executed in order (next statement waits for previous one)
Asynchronous Programming: Allows next statements to executed without waiting --> setTimeout(code, timeInMiliSeconds)

// Multiple call backs Calling above getData() function
// This is CallBack Hell --> nested call backs forming a pyramid structure
getData(1, () => {
    console.log("Fetching Data...2")
  getData(2, () => {
    console.log("Fetching Data...3")
    getData(3, () => {
        console.log("Fetching Data...4")
      getData(4, () => {
        console.log("Fetching Data...5")
        getData(5);
      });
    });
  });
});
--> Makes code difficult to understand and manage

Promises: for eventual completion of a task (maybe pending, resolved or rejected)
States of Promises: pending, fulfilled(resolved), and rejected
Example: Online product order

JS Promises object can be:
pending: result is undefined 
resolved: result has a value (fulfilled) --> resolve(result to be stored)
rejected: result has an error object --> reject(errorObject)

// Async-Await
async is a keyword used before function (often used for functions that return a promise)

// IIFE (Immeditely invoked function expression)
// To Avoid additional function call and namespase, we can use IIFE (Immeditely invoked function expression)
(async ()=>{
    await api(); // 1st call to api()
    // All the below code will stop untill above promise is pending

    await api(); // 2nd call to api()
    await api() // 3rd call to api()
    await api() // 4th call to api()
})();
// Can only be invoked once 