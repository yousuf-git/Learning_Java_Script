//Promises
//An object that represents a value that will be available now, later, or never.
//Has 3 states: pending → fulfilled → rejected .
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>
    resolve("Success!"),1000);
});
promise
.then(res=>console.log(res))
.catch(error=>console.error(error));

//Promise.all()
//  Runs multiple promises in parallel.
//  Resolves when all promises succeed.
//  Rejects if any one fails.

let p1 = Promise.resolve("First Done");
let p2 = new Promise(resolve=>setTimeout(()=>
resolve("second Done"),1000));
let p3 = Promise.resolve("Third Done");

Promise.all([p1,p2,p3]).then(res=>console.log(res))
.catch(err=>console.log("Error",err));