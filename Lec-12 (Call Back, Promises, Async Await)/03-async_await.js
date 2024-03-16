async function greet() {
  console.log("Hi Harry");
}
// greet() call this in console of browser it will display a promise automattically
let count = 0;
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        count++
      console.log("API Data: ", count);
      resolve("Data Sent")
    }, 3000);
  });
}
// await cannot be used without asyn
async function callApi(){
    console.log("Gettind Data 1...")
    await api(); // 1st call to api()
    // All the below code will stop untill above promise is pending

    console.log("Gettind Data 2...")
    await api(); // 2nd call to api()

    console.log("Gettind Data 3...")
    await api() // 3rd call to api()

    console.log("Gettind Data 4...")
    await api() // 3rd call to api()
}
// callApi();

// IIFE (Immeditely invoked function expression)
// callApi() is an additional call so to avoid it we can use IIFE (Immeditely invoked function expression)
(async ()=>{
    console.log("Gettind Data 1...")
    await api(); // 1st call to api()
    // All the below code will stop untill above promise is pending

    console.log("Gettind Data 2...")
    await api(); // 2nd call to api()

    console.log("Gettind Data 3...")
    await api() // 3rd call to api()

    console.log("Gettind Data 4...")
    await api() // 4th call to api()
})();
// Can only be invoked once 